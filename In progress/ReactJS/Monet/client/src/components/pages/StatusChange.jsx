import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux'
import { setStatus } from '../../features/statusSlice';

const StatusChange = () => {
  const { status, startTime } = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const toNumberOrNull = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  };
  const formatTime = (secs) => {
    // guard against NaN/invalid values
    const safe = Number.isFinite(secs) && secs >= 0 ? secs : 0;
    const h = String(Math.floor(safe / 3600)).padStart(2, "0");
    const m = String(Math.floor((safe % 3600) / 60)).padStart(2, "0");
    const s = String(Math.floor(safe % 60)).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }

  const handleChange = (e) => {
    dispatch(setStatus(e.target.value));
  };

  useEffect(() => {
    if (!startTime) {
      setTime(0);
      return;
    };

    if (timerRef.current) clearInterval(timerRef.current);

    const update = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTime(elapsed >=0 ? elapsed: 0);
    };
    update(); //Run immediately
    timerRef.current = setInterval(update, 1000);

    return () => clearInterval(timerRef.current)
  }, [startTime]);

  return (
    <div className='contentPanel'>
      <h2>Manual Status Change</h2>
      <div className="formDiv">
        <form>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Set Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Set Status"
                onChange={handleChange}
              >
                <MenuItem value={'Available'}>1. Available</MenuItem>
                <MenuItem value={'Break'}>2. Break</MenuItem>
                <MenuItem value={'Lunch'}>3. Lunch</MenuItem>
                <MenuItem value={'Meeting'}>4. Meeting</MenuItem>
                <MenuItem value={'System Issues - Tek'}>5. System Issues - Tek</MenuItem>
                <MenuItem value={'System Issues - MS'}>6. System Issues - MS</MenuItem>
                <MenuItem value={'Training - Tek'}>7. Training - Tek</MenuItem>
                <MenuItem value={'Training - MS'}>8. Training - MS</MenuItem>
                <MenuItem value={'Other Tek Activities'}>9. Other Tek Activities</MenuItem>
                <MenuItem value={'End of shift'}>10. End of shift</MenuItem>
                <MenuItem value={'Logged out'}>11. Logged out</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </form>
      </div>
      {
        status !== "" ? (
          <h1>Time in status <b>{status}</b> : {formatTime(time)}</h1>
        ) : (
          <h1>No status selected</h1>
        )
      }
    </div>
  )
}

export default StatusChange