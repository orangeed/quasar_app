<!-- 文章详情 -->
<template>
  <div id="articleDeatil">
    <articleImg
      :title="article.title"
      :imgSrc="article.img"
      :createTime="article.createTime"
      :updateTime="article.updateTime"
      :tag="article.tag"
      :number="article.description.length"
    />
    <q-page-container>
      <q-page class="acticle" padding style="padding-top: 66px">
        <div class="left">
          <q-card class="my-card q-mr-lg" basic flat>
            <q-card-section :class="$store.state.isMobile ? 'img' : 'content'">
              <div v-html="article.content"/>
            </q-card-section>
          </q-card>
        </div>
        <div class="right q-ml-lg">
          <!-- <q-page-sticky expand position="top-right"> -->
          <q-card>
            <div class="posi">
              <font-awesome-icon
                :icon="['fas','folder-open']"
                class="q-ml-lg q-mt-lg text-grey-9"
                style="font-size:20px"
              />
              <span class="q-ml-md">目录</span>
            </div>
            <q-card-actions vertical>
              <q-btn flat>Action 1</q-btn>
              <q-btn flat>Action 2</q-btn>
            </q-card-actions>
          </q-card>
          <!-- </q-page-sticky> -->
        </div>
      </q-page>
    </q-page-container>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      drawerLeft1: false,
      article: {
        id: 0,
        title: "这是第一篇文章",
        img: "https://s1.ax1x.com/2020/06/24/NwAQ39.md.jpg",
        createTime: "2020-07-16",
        updateTime: "2020-07-21",
        tag: "教程",
        description:
          "不知道是多少天了，在无数个难眠的夜晚，我辗转反侧，想有自己的台式电脑，最好是自己组装的，正好，今年刚刚毕业，又赶上了618活动，就开始买买买（虽然自己是在之前两天买的）！ ",
        content: `<div class="post-content" id="article-container"><p><a href="https://s1.ax1x.com/2020/07/03/NjyaGV.jpg" data-fancybox="group" data-caption="logo" class="fancybox"><img alt="logo" class="loaded" src="https://s1.ax1x.com/2020/07/03/NjyaGV.jpg" data-ll-status="loaded"></a></p><p>毕业设计，经过磨难，终于写出了一个基本版本，我称他为1.0.0版本。这是一个电子商务网站，包括前台购买，后台管理系统，数据库和服务端。较为完整，就申请了个软著，后面也没有继续完善嘞。</p><h2 id="1-准备好要申请的软件"><a href="#1-准备好要申请的软件" class="headerlink" title="1 准备好要申请的软件"></a>1 准备好要申请的软件</h2><p>软著，全称软件著作权，这个简单的讲，就是拿一个软件去申请一个软件属于你的权利，所以软件是核心，最好是自己写的，或者是没有过的。反正就是不要抄袭别人的就好了。</p><h2 id="2-准备两份材料"><a href="#2-准备两份材料" class="headerlink" title="2 准备两份材料"></a>2 准备两份材料</h2><p>两份材料，包含了代码部分和软件设计书或者软件使用说明书。</p><p>代码部分，很简单，将你的程序软件的核心代码拷贝一份，放在一个文件下面，必要要有60页，其实这个很简单的，一个软件程序，动不动就是几千行上万行的。</p><p>软件设计书，或者软件使用说明书。前者，就是写你这个程序当时是怎么设计的，系统需求，系统设计，系统实现这几个部分是最重要的，还要写数据库是怎么设计的，包含了哪些表，表里面含有哪些字段。软件使用说明书，就是指这个软件是怎么使用的，你要一步一步的说明哪个功能模块怎么进入，怎么操作，会得到什么结果之类的。这个就比较详细，但是一般也没超过20页。</p><h2 id="3-准备合作开发合同"><a href="#3-准备合作开发合同" class="headerlink" title="3 准备合作开发合同"></a>3 准备合作开发合同</h2><p>如果你是个人开发的，就可以跳过这一步了，只有是合作开发的时候，才需要一个合作开发合同，这样是为了保证两个人的权利问题。防止以后扯皮或者其他什么问题。</p><h2 id="4-打印好以下的材料"><a href="#4-打印好以下的材料" class="headerlink" title="4 打印好以下的材料"></a>4 打印好以下的材料</h2><p>打印一份代码，打印一份软件设计书，打印一份合作开发合同，加起来也不贵，就几十元的样子。然后你需要去“中国版权保护中心”登录一下你的帐号进行填写软著申报登记（计算机软件著作权登记申请表），然后将这个填写好的登记表打印出来，在上面签字填写必要的信息就好了。最后将这些东西寄出去，地址是北京市西城区天桥南大街1号天桥艺术大厦A座三层。</p><h2 id="5-下面就是漫长的等待"><a href="#5-下面就是漫长的等待" class="headerlink" title="5 下面就是漫长的等待"></a>5 下面就是漫长的等待</h2><p>2019年12月24日，我登记了软著，并将材料寄出去了，然后就是等待了。</p><p>2020年2月11日，才开始受理登记。</p><p>2020年3月18日开始审查，领导审批。</p><p>2020年3月19日发证。</p><p>2020年4月15日收到快递，拿到了心念已久的软件著作权登记证书。</p><p><a href="https://pic2.zhimg.com/80/v2-521b111ecfc11b6ac08dd08c278c23b5_720w.jpg" data-fancybox="group" data-caption="软著申请流程图" class="fancybox"><img src="https://pic2.zhimg.com/80/v2-521b111ecfc11b6ac08dd08c278c23b5_720w.jpg" alt="软著申请流程图" data-ll-status="loaded" class="loaded"></a></p><p>时间稍微有点久，可能也是因为疫情的原因吧。</p><p>这是拿到的快递样子。</p><p><a href="https://pic1.zhimg.com/80/v2-a9396b2d8e249194f9eec4c86ebabc18_720w.jpg" data-fancybox="group" data-caption="快递图" class="fancybox"><img src="https://pic1.zhimg.com/80/v2-a9396b2d8e249194f9eec4c86ebabc18_720w.jpg" alt="快递图" data-ll-status="loaded" class="loaded"></a></p><p>这是里面的软件著作权登记证书。</p><p><a href="https://pic1.zhimg.com/80/v2-beed3eb8cde90342f51f9784cf90590c_720w.jpg" data-fancybox="group" data-caption="证书图" class="fancybox"><img src="https://pic1.zhimg.com/80/v2-beed3eb8cde90342f51f9784cf90590c_720w.jpg" alt="证书图" data-ll-status="loaded" class="loaded"></a></p><p>嗯….图片较为模糊，毕竟自己的老年人手机用了好久了，摄像头都被磨损了。害！将就看吧<del>~</del></p><p>有想申请软著的朋友，不同的地方可以问我哈，虽然我也只是申请了一次，但是会的会说的，不会的就….无能为力嘞！</p><p>就这样吧，以上！</p><p>原文链接:<br><a href="https://zhuanlan.zhihu.com/p/141529705" target="_blank" rel="noopener">知乎_橘子的分享</a><br><a href="https://mp.weixin.qq.com/s/s04atr0HO-axxHopW9_wVg" target="_blank" rel="noopener">微信公众号_橘子的分享</a></p></div>`
      }
    };
  },
  computed: {},
  created() {
    console.log(this.article.description.length);
  },
  mounted() {
    // document.querySelectorAll("img").style.width = "200px";
    // console.log(
    //   'document.querySelectorAll("img")',
    //   document.querySelectorAll("img")
    // );
    // if (this.$store.state.isMobile) {
    //   const img = document.querySelectorAll("img");
    //   img.forEach(v => {
    //     v.width = 220;
    //   });
    // }
  },
  watch: {},
  methods: {},
  components: {}
};
</script>

<style  lang="scss">
#articleDeatil {
  background: url("https://s1.ax1x.com/2020/07/04/Nv2rxP.jpg");
  background-size: cover;
  background-attachment: fixed;

  .acticle {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    padding: 2rem 15px;
    max-width: 1200px;
    flex-wrap: wrap;
    .my-card {
      .content {
        padding: 50px 40px;
        width: 100%;
        h2 {
          font-size: 30px;
          font-weight: 600;
        }
        a {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .img {
        padding: 50px 40px;
        width: 100%;
        height: 100%;
        p {
          margin: 0;
        }
        h2 {
          font-size: 20px;
          font-weight: 600;
        }
        img {
          width: 210px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 20px;
        }
      }
    }
    .left {
      flex: 3;
      // width: 75vw;
      // margin-left: 0;
    }
    .right {
      flex: 1;
      // position: relative;
      // width: 25vw;
      // height: 100%;
      // position: fixed;
      // top: 52vh;
      // left: 0;
      .posi {
      }
    }
  }
}
</style>
