const baseurl = 'https://www.imapway.cn/alumniapi'
// const baseurl = 'http://192.168.0.222:8084'
const api = {
	test: baseurl + '/stickeronline/rich/text/list',
	getUserOpenid: baseurl + '/tb/wechat/getAppletUserInfo',
	/**
	 * 收藏相关接口
	 */
	addCollect: baseurl + '/stickeronline/collect/add',
	delteCollect: baseurl + '/stickeronline/collect/deleteByUserIdAndRecordId',
	getCollect: baseurl + '/stickeronline/collect/queryByUserId',


	getApply: baseurl + '/stickeronline/alumnusJoin/queryApplyListByuserId',
	/**
	 * 微信用户接口
	 */
	getWechatUserList: baseurl + '/stickeronline/wechat/users/list',
	getWechatUserById: baseurl + '/stickeronline/wechat/users/queryById',
	addWechatUser: baseurl + '/stickeronline/wechat/users/add',
	updateWechatUser: baseurl + '/stickeronline/wechat/users/edit',
	deletetWechatUser: baseurl + '/stickeronline/wechat/users/delete',
	queryAllByUserId: baseurl + '/stickeronline/wechat/users/queryAllByUserId',
	queryFansListByUserId: baseurl + '/stickeronline/wechat/users/queryFansListByUserId',
	queryAttentionListByUserId: baseurl + '/stickeronline/wechat/users/queryAttentionListByUserId',

	getUserListByInitialGroup: baseurl + '/stickeronline/wechat/users/getUserListByInitialGroup',
	getUserDetailsByUserId: baseurl + '/stickeronline/wechat/users/getUserDetailsByUserId',
	/**
	 * 关注校友
	 */
	getWechatUserAttentionList: baseurl + '/stickeronline/wechat/users/attention/list',
	getWechatUserAttentionById: baseurl + '/stickeronline/wechat/users/attention/queryById',
	addWechatUserAttention: baseurl + '/stickeronline/wechat/users/attention/add',
	updateWechatUserAttention: baseurl + '/stickeronline/wechat/users/attention/edit',
	deleteWechatUserAttention: baseurl + '/stickeronline/wechat/users/attention/delete',

	/**
	 * 新闻接口
	 */
	getNewsList: baseurl + '/stickeronline/news/list',
	getNewsById: baseurl + '/stickeronline/news/queryById',
	addNews: baseurl + '/stickeronline/news/add',
	updateNews: baseurl + '/stickeronline/news/edit',
	deleteNews: baseurl + '/stickeronline/news/delete',
	/**
	 * 师资力量
	 */
	getTeachersList: baseurl + '/stickeronline/teachers/list',
	getTeachersById: baseurl + '/stickeronline/teachers/queryById',
	addTeachers: baseurl + '/stickeronline/teachers/add',
	updateTeachers: baseurl + '/stickeronline/teachers/edit',
	deleteTeachers: baseurl + '/stickeronline/teachers/delete',
	/**
	 * 优秀校友
	 */
	getMemberList: baseurl + '/stickeronline/member/list',
	getMemberById: baseurl + '/stickeronline/member/queryById',
	addMember: baseurl + '/stickeronline/member/add',
	updateMember: baseurl + '/stickeronline/member/edit',
	deleteMember: baseurl + '/stickeronline/member/delete',


	/**
	 * 校友合作
	 */
	getCooperationList: baseurl + '/stickeronline/cooperation/list',
	getCooperationById: baseurl + '/stickeronline/cooperation/queryById',
	addCooperation: baseurl + '/stickeronline/cooperation/add',
	updateCooperation: baseurl + '/stickeronline/cooperation/edit',
	deleteCooperation: baseurl + '/stickeronline/cooperation/delete',
	/**
	 * 点亮全球
	 */
	addLightUpPersonnel: baseurl + '/stickeronline/signin/add',
	getPositionList: baseurl + '/stickeronline/signin/queryAll',
	updatePersonnelPosition: baseurl + '/stickeronline/signin/edit',
	/**
	 * 校庆祝福
	 */
	getBulletChatList: baseurl + '/stickeronline/barrage/list',
	sendBulletChat: baseurl + '/stickeronline/barrage/add',
	/**
	 * 照片征集
	 */
	getPhotoList: baseurl + '/stickeronline/photo/list',
	getUserList: baseurl + '/stickeronline/photo/getUserList',
	addPhoto: baseurl + '/stickeronline/photo/add',
	/**
	 * 组织
	 */
	getAlumnusList: baseurl + '/stickeronline/alumnus/list',
	//加入组织
	addAlumnusJoin: baseurl + '/stickeronline/alumnusJoin/add',
	delAlumnusJoin: baseurl + '/stickeronline/alumnusJoin/delete',
	applyByUserId: baseurl + '/stickeronline/alumnusJoin/applyByUserId',
	queryPresidentByUserId: baseurl + '/stickeronline/alumnusJoin/queryPresidentByUserId',
	//获取我加入的组织列表
	getAlumnusByuserId: baseurl + '/stickeronline/alumnus/getListByUserId',
	//资讯
	getAlumnusNewsList: baseurl + '/stickeronline/alumnusNews/list',
	//资讯详情
	getAlumnusNewsById: baseurl + '/stickeronline/alumnusNews/queryById',
	//获取活动列表
	getAlumnusActivityList: baseurl + '/stickeronline/alumnusActivity/list',
	//获取活动详情
	getAlumnusActivityById: baseurl + '/stickeronline/alumnusActivity/queryById',
	sendActivity: baseurl + '/stickeronline/alumnusActivity/add',
	sendNotice: baseurl + '/stickeronline/alumnusNews/add',
	//获取相册列表
	getAlumnusPhotoList: baseurl + '/stickeronline/alumnusPhoto/list',
	//获取相册详情
	getAlumnusPhotoById: baseurl + '/stickeronline/alumnusPhoto/queryById',

	//获取组织成员列表
	gitAlumnusMemberList: baseurl + '/stickeronline/wechat/users/queryListByAlumnusId',
	//获取组织成员信息
	getAlumnusMemberById: baseurl + '/stickeronline/alumnusMember/queryById',

	// 获取审核页面信息

	//会长
	getPresidentList: baseurl + '/stickeronline/alumnusJoin/list?checkState=1',
	getPresidentStatus: baseurl + '/stickeronline/alumnusJoin/checkById',

	//校友
	getExamineList: baseurl + '/stickeronline/wechat/users/list?auditStatus=0',
	getExamineStatus: baseurl + '/stickeronline/wechat/users/checkById',



	//获取班级列表
	getClassGrade: baseurl + '/stickeronline/classGrade/list',
	/**
	 * 参加活动接口
	 */
	getActivityApplyList: baseurl + '/stickeronline/alumnusActivity/apply/list',
	getActivityApplyById: baseurl + '/stickeronline/alumnusActivity/apply/queryById',
	addActivityApply: baseurl + '/stickeronline/alumnusActivity/apply/add',
	updateActivityApply: baseurl + '/stickeronline/alumnusActivity/apply/edit',
	deleteActivityApply: baseurl + '/stickeronline/alumnusActivity/apply/delete',

	/**
	 * 发现
	 */
	//获取发现列表
	getDiscoverList: baseurl + '/stickeronline/moments/list',
	//获取关注人的朋友圈
	getDiscoverListByUserId: baseurl + '/stickeronline/moments/queryByUserId',
	//根据校友会ID获取朋友圈
	getDiscoverListByAlumnusId: baseurl + '/stickeronline/moments/queryByAlumnusId',

	//发布消息
	publishMoment: baseurl + '/stickeronline/moments/add',
	//点赞操作
	momentLike: baseurl + '/stickeronline/momentsLike/add',
	//发现评论
	momentComment: baseurl + '/stickeronline/momentsComment/add',

	uploadFile: baseurl + '/file/upload',

	getMyNews: baseurl + '/stickeronline/message/queryByUserId'

}
export default api