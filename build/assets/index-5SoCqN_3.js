import { r as e, j as t } from "./app-CYH7DoRt.js";
import r from "./LoveLetter-BsW1WfEP.js";
/* empty css                   */
import "./index-CFFy2gO5.js";

function i() { 

  const letterData = {
      "note": "Pún ké của Ngwn 😍",
      "letter_title": "Love letter",
      "to": "Gửi người tui thương:3",
      "text_area": "Tui đã nhiều lần ngồi trước tờ giấy trắng, cố gắng tìm cách diễn tả cho em hiểu được rằng em quan trọng với tui đến nhường nào. Thế nhưng, mỗi khi bắt đầu viết, dường như mọi ngôn từ đều trở nên thật nhỏ bé nhường nào trước tình yêu tui dành cho em.
Tui hong có nhìu lời hoa mỹ để nói, nhưng có những điều tựa như dòng chảy chậm, lúc nào cũng hiện hữu. Tình cảm tui dành cho em không phải là những gì rực rỡ, mà là cái yên bình giữa nhịp đời tấp nập, xô bồ. Có em, mọi thứ đều trở nên ngọt ngào, tốt đẹp và trọn vẹn dù chỉ là những khoảnh khắc nhỏ nhất.
Em luôn bảo tui rằng nếu có gì bất mãn, khó chịu về em thì tui phải chia sẻ với em luôn để em sửa, ngược lại tui mong em cũng sẽ làm vậy nếu tui không mảy may làm em cảm thấy chíu khọ, ý nà mong em có thể thẳng thắn chia sẻ cảm xúc của em cho tui vì tui chỉ muốn yêu em như cách em muốn, em vui thì tui cũng vui lâyyy. Nói chung là tui chỉ muốn em cảm thấy vui khi ở bên tui thui nên em phải hứa chia sẻ với tui những lúc em bất mãn đấy nhíe. Và em hãy nhớ rằng, kể cả khi em kể cho tui về những bóng tối trong cuộc đời em thì tui vẫn sẽ nhìn em như ánh mặt trời:3
Tui không biết tương lai sẽ ra sao nhưng tui rất yêu em và tui chỉ mong ông trời viết lên cái kết đẹp cho tui, cho em, cho đôi mình. Nắng cũng đã đi cùng nhau, mưa cũng đã ướt, chỉ mong khi trời quang mây tạnh ta vẫn đi cùng nhau, em vẫn luôn ở đấy và ôm tui đi hết quãng đường này🫶🏻",
      "form": "Người iêu cụa em/n kimngwn",
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
