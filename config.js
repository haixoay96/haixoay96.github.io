// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Gửi đến Dương xinh gái",
        "Dương thân mến",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Hôm nay là sinh nhật cậu",  // 同上...
        "Linh chúc Dương tuổi mới",
        "Sức khoẻ dồi dào này",
        "Gia đình luôn luôn sung túc này",
        "Thành công nối tiếp thành công này",
        "Sinh nhật vui vẻ ý nghĩa nha nhá",
        "-Linh-",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Love you <3"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Gửi đến Dương xinh gái": "./imgs/duong.jpg",
        "Dương thân mến": "./imgs/duong1.jpg",
        "Hôm nay là sinh nhật cậu":"./imgs/duong2.jpg",  // 同上...
        "Linh chúc Dương tuổi mới":"./imgs/duong3.jpg",
        "Sức khoẻ dồi dào":"./imgs/duong4.jpg",
        "Gia đình luôn luôn sung túc":"./imgs/duong5.jpg",
        "Thành công nối tiếp thành công":"./imgs/duong6.jpg",
        "Sinh nhật vui vẻ ý nghĩa nha":"./imgs/duong7.jpg",
        "-Linh-":"./imgs/linh.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Bấm vào đây đi Dương",
        play: "Làm tí nhạc nhể",
        bannar_coming: "Banner sinh nhật nào!",
        balloons_flying: "Bóng bay nào",
        cake_fadein: "Bánh gato nào?",
        light_candle: "Châm nến？",
        wish_message: "Chúc mừng sinh nhật!",
        story: "Đôi lời nhắn nhủ",
    }
};
