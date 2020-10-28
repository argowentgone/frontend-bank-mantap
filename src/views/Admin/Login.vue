<template>
    <div class="login-box">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="8">
                <el-form
                    :model="loginForm"
                    status-icon
                    :rules="rules"
                    ref="loginForm"
                    label-width="100px"
                    class="demo-loginForm"
                    label-position="left">
                    <el-form-item label="Email" prop="email">
                        <el-input v-model="loginForm.email" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="pass">
                        <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginForm')">Login</el-button>
                        <el-button @click="resetForm('loginForm')">Cancel</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                email: '',
                pass: '',
            },
            rules: {
                email: [
                    { required: true, message: 'Please input email address', trigger: 'blur' },
                    { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                ],
                pass: [
                    { required: true, message: 'Please input your password', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                    this.$router.push('dashboard');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>