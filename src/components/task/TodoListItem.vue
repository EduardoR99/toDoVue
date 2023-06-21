<template>
    <main>
        <div class="bg-white shadow-sm rounded-md text-gray-700 p-4"
            :class="{ 'opacity-25 line-through': task.done }">
            <div>{{ task.description }}</div>
            <div class="py-4 bg-white">
                <BaseCheckBox class="mb-2" @update:model-value="$emit('update:done', $event)"
                    :model-value="done">Done</BaseCheckBox>
                <BaseCheckBox @update:model-value="$emit('update:priority', $event)"
                    :model-value="priority">Prioritized</BaseCheckBox>
            </div>
        </div>
    </main>
</template>
<script>
import BaseCheckBox from '../base/BaseCheckbox.vue'
export default {
    name: 'TodoListItem',
    components:{
        BaseCheckBox
    },
    props: {
        task: {
            type: Object,
            required: true,
        },
        projectId: Number,
        done: Boolean,
        priority: Boolean,
    },
    provide() {
        return{
            task: this.task,
            projectId: this.projectId
        }
    },
    emits: ['update:done', 'update:priority']
}
</script>
<style></style>