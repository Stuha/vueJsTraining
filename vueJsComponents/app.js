let PlanPickerItemComponent = {
    template: '#plan-picker-item-template',
    props: {
        name: {
            type: String,
            required: true
        },
        selectedPlan: {
            type: String
        },
        textDecorationColor: {
            type: String
        }
    },
    computed: {
        isSelected() {
            return this.name === this.selectedPlan ? 'blue' : '';
        }
    },
    methods: {
        select() {
            this.$emit('select', this.name);
        },
    }
}

let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        'plan-picker-item': PlanPickerItemComponent
    },
    data() {
        return {
            plans: ['Beginner', 'Intermediate', 'Advanced'],
            selectedPlan: null,
            submittedData: null,
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }
}

let InputRidingStyleItemComponent = {
    template: '#input-riding-style-item',
    data() {
        return {
            riderHeight: 140,
            riderWeight: 60,
            ridingStyles:['Freestyle', 'Allmountain', 'Freeride'],
            selectedRidingStyle: 'Freestyle'
        }
    },
    methods: {
        submit() {
            this.$emit('submit', this);
        }
    }
}

let InputRidingStyleComponent = {
    template: '#input-riding-style',
    components: {
        'input-riding-style-item': InputRidingStyleItemComponent
    },
    data() {
        return {
            height: null,
            weight: null,
            ridingStyle: null,
            showSubmittedData: false
        };
    },
    methods: {
        getSubmittedData(data) {
            this.height = data.riderHeight;
            this.weight = data.riderWeight;
            this.ridingStyle = data.selectedRidingStyle;
            this.showSubmittedData = true;
        }

    }
}

new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponent,
        'input-riding-style': InputRidingStyleComponent
    }
})