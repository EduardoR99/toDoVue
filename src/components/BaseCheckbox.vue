<template>
    <main>
        <div class="flex items-center">
            <input type="checkbox" class="h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2" :checked="modelValue"
                @change="onChange" />
            <label>
                <slot>Checkbox</slot>
            </label>
        </div>
    </main>
</template>
<script>
export default {
    name: 'BaseCheckBox',
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },

    },
    emits: ['update:modelValue'],
    methods: {
        onChange() {
            this.$emit(
                'update:modelValue', !this.modelValue
            );
        }
    }
}
</script>
<style></style>