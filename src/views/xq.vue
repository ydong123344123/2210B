<template>
    <div  >
    
        <div>
           <div>
           姓名 {{ row.name }}
           </div>
           <div>
            头像<img class="img" :src="row.avatar_url" alt="">
           </div>
           <div>
            邮箱{{ row.email }}
           </div>
           <div>
            手机号{{ row.phone }}
           </div>
           <div>
            创建时间{{ row.created_at }}
           </div>
           <div>
            更新时间 {{ row.updated_at }}
           </div>
           <div>
            状态 {{ row.is_locked==0?'正常':'不正常' }}
           </div>
           <el-button type="primary" @click="fh">返回</el-button>
        </div>

    
    </div>
</template>

<script>
export default{
    data() {
        return {
            row:{},
           
        }
    },
    created() {
       let id = this.$route.query.id
       this.$axios.get(`api/admin/users/${id}`,{params:{users:id}}).then(res=>{
        console.log(res);
        this.row=res.data
       })
    },
    methods: {
        fh(){
            this.$router.push("/users")
        },
        
    },
}

</script>

<style>

.img{
    width: 50px;
    height: 50px;
}

</style>