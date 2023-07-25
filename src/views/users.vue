<template>
    <div>
        <div class="big">
            <div>
                姓名<el-input class="input" v-model="page.name" placeholder="姓名"></el-input>
            </div>
            <div>
                邮箱<el-input class="input" v-model="page.email" placeholder="邮箱姓名"></el-input>
            </div>
            <div>
                手机号<el-input class="input" v-model="page.phone" placeholder="手机号"></el-input>
            </div>
            <div>
                <el-button type="primary" @click="search">查询</el-button>
            </div>
        </div>
        <div>
            <el-button class="btn" type="primary" @click="tz">添加</el-button>
        </div>

        <el-card>
            <el-table :data="users" style="width: 100%">
                <el-table-column fixed prop="name" label="姓名">
                </el-table-column>
                <el-table-column prop="email" label="邮箱">
                </el-table-column>
                <el-table-column prop="phone" label="手机号">
                </el-table-column>
                <el-table-column prop="is_locked" label="状态">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.is_locked == 0 ? true : false" active-color="#13ce66"
                            inactive-color="#ff4949" @change="change(scope.row.id)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column prop="created_at" label="创建时间">
                </el-table-column>
                <el-table-column prop="updated_at" label="更新时间">
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="xq(scope.row)" type="text" size="small">详情</el-button>
                        <el-button type="text" size="small" @click="bj(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="page.current" :page-sizes="[2, 5, 10, 15]" :page-size="page.pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            total:0,//总条数
            xgid: 0,//编辑的id
            page: {
                current: 1,
                name: '',
                email: '',
                phone: '',
                pageSize: 5
            },
            users: [],//数据列表
        }
    },

    methods: {
        // 搜索
        search() {
            this.getusers()
        },
        // 封装用户数据列表
        getusers() {
            this.$axios.get("api/admin/users", { params: this.page }).then(res => {
                console.log(res);
                this.users = res.data.data
                this.total=res.data.meta.pagination.total
            })
        },
        // 修改用户状态
        change(id) {
            this.$axios.patch(`api/admin/users/${id}/lock`).then(res => {
                console.log(res);
                if (res.request.status == 204) {
                    this.$message.success('状态切换成功')
                    this.getusers()
                }
            })
        },
        // 跳转到添加页面
        tz() {
            this.$router.push('/add')
        },
        // 跳转到编辑页面
        // 数据回填
        bj(row) {
            this.$router.push({ path: '/bj', query: { row: row } })
        },
        // 分页
        handleSizeChange(val){
            this.page.pageSize=val
            this.getusers()
        },
        handleCurrentChange(val){
            this.page.current=val
            this.getusers()
        },
        // 详情
        xq(row){
            this.$router.push(`/xq?id=${row.id}`)
        }

    },
    created() {
        this.getusers()
    },
}

</script>


<style>
.big {
    display: flex;
    justify-content: space-between;
}

.input {
    width: 300px;
}

.btn {
    margin-top: 50px;
}
</style>