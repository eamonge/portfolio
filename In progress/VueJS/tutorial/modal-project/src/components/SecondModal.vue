<template>
    <div class="backdrop" @click.self="closeModal2">
        <div class="modal" :class="{ success: theme === 'success' }">
            <p>{{ a }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['a', 'theme'],
    methods: {
        closeModal2() {
            this.$emit('close');
        }
    }
}
</script>

<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    /* z-index: 3; */
}

.modal.success {
    background: green;
    color: black;
}
</style>