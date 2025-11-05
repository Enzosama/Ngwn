import { r as e, j as t } from "./app-CYH7DoRt.js";
import r from "./LoveLetter-BsW1WfEP.js";
import { d as decrypt } from "./OpenSSLDecryptionService-BN1pod0O.js";
/* empty css                   */
import "./index-CFFy2gO5.js";

function i() {
  const letterData = {
    note: "Gửi người tui thương",
    text_area: "Em yên tâm nhíe, mình hong hứa sẽ yêu em mãi mãi vì mãi mãi nghe xa xôi quá… nhưng hôm nay và ngày mai, ngày kia, mình vẫn sẽ chọn em. Mình hứa sẽ luôn ở bên cạnh em dù thế nào đi chăng nứa, mình sẽ luôn ở đây, ở sau em, làm hậu phương vững chắc cho em. Em biết không, trong hành trình dài phía trước, sẽ có những ngày trời không trong xanh, những ngày đôi mình cảm thấy mệt mỏi. Nhưng chỉ cần chúng mình không buông tay nhau, mọi thứ rồi sẽ ổn thôi.\nMình sẽ mãi nắm tay em dù cho những lúc ta chưa tìm được tiếng nói chung, hoặc những lúc đôi ta không hiểu thể hiểu hết những suy nghĩ của nhau, những lúc lời nói trở nên vụng về hay những hiểu nhầm vô tình làm chúng mình tổn thương. Miễn là em không nghĩ đến việc dừng lại thì mình sẽ luôn tìm được lí do để chúng mình cùng nhau bước tiếp🫶🏻",
    to: "Người iêu của em",
    form: "kimngwn",
    letter_title: "Love letter",
    music: "1V3jB0Xj_L0OqY6gL4kI9w3E_hJ4jG3kC",
  };
  
  const musicUrl = letterData.music ? `/proxy-drive/${letterData.music}` : void 0;

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
