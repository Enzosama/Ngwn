import { r as e, j as t } from "./app-CYH7DoRt.js";
import r from "./LoveLetter-BsW1WfEP.js";
/* empty css                   */
import "./index-CFFy2gO5.js";

function i() { 

  const letterData = {
      "note": "Pún ké của Ngwn 😍",
      "letter_title": "Love letter",
      "to": "Gửi ngàn nụ hôn đến Pún ké của Ngwn. ILoveU♥",
      "text_area": "Chúc mừng sinh nhật em yêu 🎂\nHôm nay là ngày đặc biệt nhất vì thế giới này đã có thêm một người làm trái tim anh rung rinh mỗi ngày. Anh thật sự biết ơn vì em đã đến bên anh, cùng chia sẻ tiếng cười, những lần giận dỗi vu vơ và cả những khoảnh khắc ấm áp mà chẳng cần lời nói nào cũng hiểu nhau. Em chính là lý do khiến những ngày bình thường của anh trở nên đáng nhớ hơn, vui hơn và ý nghĩa hơn. Anh mong tuổi mới của em sẽ thật nhiều niềm vui, ít muộn phiền, có thật nhiều trải nghiệm tuyệt vời và lúc nào cũng giữ nụ cười tỏa nắng trên môi. Anh hứa sẽ luôn ở đây, vừa là người yêu, vừa là bạn đồng hành cùng em đi qua mọi điều, dù nhỏ hay lớn. Happy birthday cô gái bé nhỏ của anh, chúc em tuổi mới chill hơn, xinh hơn, và yêu anh nhiều hơn nữa nha 🥰\n\n",
      "form": "Ngwn",
      "music": "1719299446.mp3"
  };

  const musicUrl = letterData.music ? `/proxy-drive/${letterData.music}` : undefined;

  // Dữ liệu đã được định nghĩa ở trên, không cần giải mã
  return t.jsx(r, {
    greeting: letterData.note,
    message: letterData.text_area,
    name: letterData.to,
    ownName: letterData.form,
    title: letterData.letter_title,
    music: musicUrl,
  });
}

export { i as default };