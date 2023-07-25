<template>
    <div>
        <el-container>
            <el-header class="header">
                <div>
                    图书后台管理
                </div>
                <el-button type="primary" @click="tc">退出登录</el-button>
            </el-header>
            <el-container>
                <!-- 侧边菜单 -->
                <el-aside width="200px">
                    <el-menu
                    router
                    default-active="2" class="el-menu-vertical-demo" 
                        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>用户</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item :index="'/users'">用户列表</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>分类</span>
                            </template>
                          
                        </el-submenu>
                       
                    </el-menu>
                </el-aside>
                <!-- 坑 -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
export default{
    data() {
        return {
            
        }
    },
    methods: {
        tc(){
           this.$router.push('/login') 
           sessionStorage.removeItem("access_token")
        }
    },
}

</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;

}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: 100vh;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;

}
</style>