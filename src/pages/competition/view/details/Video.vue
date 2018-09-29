<template>
  <div class="videoWrap">
    <div class="title"><span>观看直播 LIVE</span></div>
    <div class="videoBox">
      <video src="" ></video>
      <button class="controls"></button>
      <div class="cover" style="background-image:url(https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg)"></div>
    </div>
    <div class="videoInfoWrap">
      <div class="info">
        <div class="count">
          <span>10.88</span>
          <em>km</em>
        </div>
        <p>赛道总长</p>
      </div>
      <div class="info">
        <div class="count">
          <span>59:378</span>
        </div>
        <p>最快圈数</p>
      </div>
      <div class="b"></div>
      <div class="ring" style="background-image:url(https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg)"></div>
    </div>
  </div>
</template>

<script>
// 赛事：第一部分

export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";

.videoWrap {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: px(100);
    text-align: center;
    font-size: 32px;
    color: #333;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: px(12);
    span {
      padding-left: px(56);
      background: url("../../image/video.png") no-repeat left center;
      background-size: px(44) px(27);
    }
  }
  .videoBox {
    position: relative;
    width: 100%;
    height: px(412);
    margin-bottom: px(12);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    .cover {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
    .controls {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: url("../../image/video_button.png") no-repeat center center;
      background-size: px(100) px(100);
      width: px(100);
      height: px(100);
      border: none;
    }
    video {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .videoInfoWrap {
    padding: 0 px(30);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: px(178);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    // 216
    .info {
      width: px(200);
      flex-shrink: 0;
      .count {
        span {
          font-size: px(48);
          color: #333;
        }
        em {
          font-size: px(24);
          color: #333;
          transform: scale(0.9);
          font-style: normal;
          font-weight: 100;
          padding-left: px(5);
        }
      }
      p {
        color: #ccc;
        font-size: px(24);
      }
    }
    .b {
      width: 1px;
      height: px(114);
      background: #ddd;
      margin-right: px(34);
    }
    .ring {
      width: px(188);
      height: px(114);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    }
  }
}
</style>
