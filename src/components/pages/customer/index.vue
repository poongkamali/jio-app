<template>
    <div class="mt-5 py-5">
        <div class="container">
            <div class="">
                <div class="customer">
                    <h4 class="pb-3">Registered Customers Details</h4>
                    <div class="table-responsive">
                        <table class="table shadow">
                            <thead>
                                <tr class="text-white">
                                    <th>Customer Name</th>
                                    <th>Location</th>
                                    <th>Jio Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(customer, index) in customers" :key='index'>
                                    <td v-if="customer.isEditing"><input type="text" class="form-control" v-model="name"></td>
                                    <td v-else>{{ customer.name }}</td>

                                    <td v-if="customer.isEditing"><input type="text" class="form-control" v-model="location"></td>
                                    <td v-else>{{ customer.location }}</td>

                                    <td v-if="customer.isEditing"><input type="text" maxlength="10" class="form-control" v-model="number"></td>
                                    <td v-else>{{ customer.number }}</td>
                                    
                                    <td class="d-flex pt-3">
                                        <i v-if="customer.isEditing" class="fas fa-plus text-success me-3"></i>
                                        <!-- <i v-if="disabled || recipe.isEditing" class="fas fa-user-edit text-primary me-3" @click.prevent="editCus(index, customer)"></i> -->
                                        <i class="fas fa-trash-alt text-danger" @click.prevent="deleteCus(index)"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isEditing: false,
            selectedIndex: null,
            disabled: true,
            name:'',
            location:'',
            number:'',
            customers:[
                {
                    name: 'uma',
                    location: 'chennai',
                    number: 9873673821
                },
                {
                    name: 'poongkamali',
                    location: 'chennai',
                    number: 7436673858
                },
            ],
        }
    },
    methods:{
        // editCus(index, customer) {
        //     this.name = customer.name;
        //     this.location = customer.location;
        //     this.number = customer.number;
        //     this.selectedIndex = index;
        //     customer.isEditing = true;
        //     this.disabled = false
        // },
        deleteCus(index){
            this.customers.splice(index, 1);
        },
    }
};
</script>

<style lang="scss" scoped>
thead {
    background-color: #2f65b0;
}
</style>