<template>
  <div class="home">
    <SlideshowHeader />
    <div class="block-section">
      <el-row :gutter="20" class="row-margin">
        <el-col :span="8" v-for="(article, index) in listArticle" :key="index">
          <el-card shadow="hover" :body-style="{ padding: '0px' }" class="article-items">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px; background-color: #cccc;">
              <h4>{{article.title}}</h4>
              <div class="bottom clearfix">
                {{article.description.substring(0, 100) + ".."}}
                <el-button type="text" class="button"><i>Readmore</i></el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideshowHeader from '@/components/SlideshowHeader.vue';

export default {
  name: 'Home',
  components: {
    SlideshowHeader,
  },
  data() {
    return {
      title: 'Home',
      listArticle: [],
    }
  },
  mounted() {
    this.listArticle = this.getDataArticle();
  },
  methods: {
    getDataArticle() {
      return [
        {
          title: "ABCDE",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          __Id: 1
        },
        {
          title: "FGHIJ",
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          __Id: 2
        },
        {
          title: "KLMNO",
          description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          __Id: 3
        },
        {
          title: "PQRST",
          description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          __Id: 4
        },
        {
          title: "UVWXY",
          description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
          __Id: 5
        },
      ]
    }
  }
}
</script>
