import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setElapsed } from "../../features/statusSlice";

const GlobalTimer = () => {
    const { startTime } = useSelector((state) => state.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!startTime) return;

        const update = () => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            dispatch(setElapsed(elapsed >= 0 ? elapsed: 0));
        };
        update();

        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, [startTime, dispatch]);

    return null; // No UI render, just updated redux
};

export default GlobalTimer;