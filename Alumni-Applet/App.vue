<script>
	import Vue from 'vue'
	import {
		getUserOpenid,getWechatUserById
	} from '@/api/user.js'
	import {dateUtil} from '@/utils/dateUtil.js'
	// var QQMapWX = require('./js_sdk/qqmap-wx-jssdk.js')
	// var qqmapsdk
	export default {
		data() {
			return {
				globalData: {
					userInfo: {
						nickName: 'Hi,游客',
						userName: '点击登录',
						avatarUrl: 'https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/20180727/150547696d798c.png'
					},
					goodId: 0,
					userId: 0,
					token: '',
				},
				isLogin: false
			}
		},
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})

			Vue.prototype.ColorList = [{
					title: '嫣红',
					name: 'red',
					color: '#e54d42'
				},
				{
					title: '桔橙',
					name: 'orange',
					color: '#f37b1d'
				},
				{
					title: '明黄',
					name: 'yellow',
					color: '#fbbd08'
				},
				{
					title: '橄榄',
					name: 'olive',
					color: '#8dc63f'
				},
				{
					title: '森绿',
					name: 'green',
					color: '#39b54a'
				},
				{
					title: '天青',
					name: 'cyan',
					color: '#1cbbb4'
				},
				{
					title: '海蓝',
					name: 'blue',
					color: '#0081ff'
				},
				{
					title: '姹紫',
					name: 'purple',
					color: '#6739b6'
				},
				{
					title: '木槿',
					name: 'mauve',
					color: '#9c26b0'
				},
				{
					title: '桃粉',
					name: 'pink',
					color: '#e03997'
				},
				{
					title: '棕褐',
					name: 'brown',
					color: '#a5673f'
				},
				{
					title: '玄灰',
					name: 'grey',
					color: '#8799a3'
				},
				{
					title: '草灰',
					name: 'gray',
					color: '#aaaaaa'
				},
				{
					title: '墨黑',
					name: 'black',
					color: '#333333'
				},
				{
					title: '雅白',
					name: 'white',
					color: '#ffffff'
				},
			]
			this.getUserInfo();
			// this.wxGetUserInfo();
		},
		// onLoad: function() {
		// 	// 实例化API核心类
		// 	qqmapsdk = new QQMapWX({
		// 		key: '5DVBZ-R4D6U-HRIVT-2473O-WXKTE-KFFAE'
		// 	});
		// },
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			getUserInfo() {
				const that = this
				this.openid = uni.getStorageSync('openid')
				if (!this.openid||this.openid=="") {
					uni.login({
						provider: 'weixin',
						success(res) {
							let params = {
								appid: 'wx7adb6a8da538ae86',
								code: res.code
							}
							getUserOpenid(params).then(data => {
								var [error, res] = data;
								if (res && res.data.success && res.data.data.openid) {
									that.openid = res.data.data.openid
									uni.setStorageSync('openid', that.openid);
									that.getWechatUserInfo();
									// uni.setStorage({
									// 	key: 'openid',
									// 	data: res.data.openid,
									// 	success: function() {
									// 		console.log('openid已存储')
									// 	}
									// })
								} else {
									uni.showToast({
										title: '登录失败'
									})
								}
							})
						},
						fail(e) {
							console.log(e)
						}
					})
				} else {
					if (uni.getStorageSync('token')) {
						return true
					} else {
						let params = {
							openId: this.openid
						}
						that.getWechatUserInfo(params)
					}

				}
			},
			getWechatUserInfo(){
				let that=this;
				let openid = uni.getStorageSync('openid');
				if (openid&&openid!="") {
					let param = {
						openid:openid
					};
					getWechatUserById(param).then(data => {
						var [error, res] = data;
						if (res && res.data.success) {
							let ss = res.data.result;
							
							if(ss!=null){
								let auditStatus = result.auditStatus
									that.auditStatus = auditStatus
									if(auditStatus == '1'){
										that.isCertification = true;
									} else {
										that.isCertification = false;
									}
									uni.setStorageSync('auditStatus', that.auditStatus);
									uni.setStorageSync('isCertification', that.isCertification);
								}
							}else{
								that.isCertification=false;
								uni.setStorageSync('auditStatus', null);
								uni.setStorageSync('isCertification', that.isCertification);
							}
					});
				} else {
					that.getUserInfo();
				}
			},
			getOpenId(){
				let openid = uni.getStorageSync('openid');
				return openid;
			},
			getIsCertification(){
				let isCertification = uni.getStorageSync('isCertification');
				return isCertification;
			},
			formatDate(date){
				return dateUtil.formatDate(date);
			},
			formatTime(date){
				return dateUtil.formatTime(date);
			}
		}

	}
</script>

<style lang="scss">
	@import './common/uni.css';
	@import "colorui/main.css";
	@import "colorui/icon.css";

	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40upx 0px;
		justify-content: space-between;
	}

	.nav-li {
		padding: 30upx;
		border-radius: 12upx;
		width: 45%;
		margin: 0 2.5% 40upx;
		background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-li::after {
		content: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10upx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}

	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
		box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
	}

	.nav-title {
		font-size: 32upx;
		font-weight: 300;
	}

	.nav-title::first-letter {
		font-size: 40upx;
		margin-right: 4upx;
	}

	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}

	.nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40upx;
		height: 6upx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 100upx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40upx;
		opacity: 0.3;
	}

	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36upx;
		margin-right: 1px;
	}

	.nav-li text {
		position: absolute;
		right: 30upx;
		top: 30upx;
		font-size: 52upx;
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
	}

	.text-light {
		font-weight: 300;
	}

	@keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}

	@-webkit-keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}
</style>
