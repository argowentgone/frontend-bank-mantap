<template>
    <div class="dashboard-pinjaman-ritel">
        <el-form ref="form" :model="form" label-position="top" label-width="120px">
            <label>Edit Page Pinjaman Ritel</label>
            <el-divider></el-divider>
            <el-form-item label="Cover Image Page">
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button size="small" type="primary">Click to upload</el-button>
                    <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
                </el-upload>
            </el-form-item>
            <el-row class="row-form">
                <el-col :span="24">
                    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </el-col>
            </el-row>
            <el-form-item style="text-align: right;">
                <el-button type="primary" @click="onSubmit">Save</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
    name: 'dashboard-pinjaman-ritel',
    data() {
        return {
            editor: ClassicEditor,
            editorData: this.$store.state.page.pinjaman.ritel,
            editorConfig: {
                // The configuration of the rich-text editor.
            },
            fileList: [],
            form: {
                coverImage: null,
                editor: null
            },
        }
    },
    mounted() {
        // const data = this.$store.state;
        // if (data.page.pinjaman.ritel) {
        //     this.editorData = data.page.pinjaman.ritel; 
        // }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
            this.$store.commit("setDataPagePinjamanritel", this.editorData);
            console.log(this.$store.state);
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
        },
    }
}
</script>