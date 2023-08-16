CREATE TABLE account(
    username varchar(50) PRIMARY KEY NOT NULL,
    fullname varchar(50) NOT NULL,
    password varchar(30) NOT NULL,
    email varchar(30) NOT NULL,
    image varchar(50),
    role bit NOT NULL,
    liked int,
    shares int,
    isActive bit NOT NULL
)

CREATE TABLE video (
   id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	title varchar(200) NOT NULL,
	href varchar(50) NOT NULL,
	poster varchar(255) NULL,
	views int NOT NULL,
	description text NOT NULL,
    likes int,
    shares int,
    date datetime NULL,
    isActive bit NOT NULL
)

CREATE TABLE history(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    userId varchar(50) NULL,
    videoId int  NULL,
    viewsDate datetime NOT NULL,
    isLike bit NOT NULL,
    likedDate datetime NULL
)

CREATE TABLE sharevideo(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    userId varchar(50) NULL,
    videoId int NULL,
    email VARCHAR(30) NOT NULL,
    shareDate datetime NOT NULL
);


ALTER TABLE history ADD FOREIGN KEY(userId) REFERENCES account(username);

ALTER TABLE history ADD FOREIGN KEY(videoId) REFERENCES video(id);

ALTER TABLE sharevideo ADD FOREIGN KEY(userId) REFERENCES account(username);

ALTER TABLE sharevideo ADD FOREIGN KEY(videoId) REFERENCES video(id);




INSERT INTO account VALUES
('dangth',N'Trần Hữu Đang','9999','dangtt135@gmail.com','dangth.png',1,1,0,1),
('duyenttm',N'Trần Thị Mỹ Duyên','123','duyenttm@gmail.com','duyenttm.png',0,6,3,1),
('nganntd',N'Nguyễn Thị Diễm Ngân','ngan','nganntd@gmail.com','nganntd.png',0,6,1,1),
('phuocnhh',N'Nguyễn Hoàng Hữu Phước','phuoc','phuocnhh@gmail.com','Phuocnhh.png',0,6,2,1),
('hanltn',N'Lê Thị Ngọc Hân','hanltn','hanltn@gmail.com','hanlth.png',0,5,0,1),
('datnt',N'Nguyễn Tiến Đạt','datnt','datnt@gmail.com','datnt.png',0,4,0,1)



INSERT INTO video VALUES
(1, N'Nàng Dâu Halloween- Thám Tử Lừng Danh Conan Vietsub','https://www.youtube.com/embed/T0TM2_lMS3M','nang-dau-hallowee.jpg',10, 
N' Nàng Dâu Halloween 🎬 - Siêu Bom Tấn Anime - Thám Tử Lừng Danh Conan Vietsub🎬🌟✨
------
▶️ Xem trước Conan lồng tiếng miễn phí trên Ứng dụng POPS: https://popsapp.onelink.me/PAKN/Conan...
▶️ Đăng ký ủng hộ POPS Anime để xem thêm nhiều bộ Anime mới nhất nhé: https://goo.gl/TWfPrJ
-----
* NỘI DUNG DÀNH CHO KHÁN GIẢ TUỔI THANH THIẾU NIÊN
Shibuya, Tokyo, nhộn nhịp không khí lễ hội Halloween. Một đám cưới được tổ chức ở Shibuya Hikarie, nơi Miwako Sato đang mặc váy cưới. Trong khi Conan và những vị khách được mời khác đang xem, một kẻ tấn công bất ngờ xông vào, và Wataru Takagi, người đang cố gắng bảo vệ Sato, bị thương. Takagi sống sót và tình hình đã ổn, nhưng trong mắt Sato, hình ảnh của thần chết mà cô đã thấy khi Jinpei Matsuda, người đàn ông cô yêu, đã bị giết trong một loạt vụ đánh bom ba năm trước hiện lên',
5,2,'2023-04-02',1),

--
(2, N'Naruto Shippuden Tập 163 - Bộc Phát! Cảnh Giới Tiên Nhân','https://www.youtube.com/embed/oh-gBJMg0kE','naruto-shippuden.jpg',9,N'* NỘI DUNG DÀNH CHO KHÁN GIẢ TUỔI THANH THIẾU NIÊN
Naruto là câu chuyện về Naruto Uzumaki, một ninja trẻ tìm kiếm sự công nhận từ mọi người và ước mơ trở thành Hokage, người lãnh đạo của làng mình. 12 năm trước, hồ ly 9 đuôi tấn công làng ninja Mộc Diệp, Hokage Đệ Tứ đã đánh bại và phong ấn vào Naruto. Từ đó, Naruto bị mọi người xa lánh, vậy nên cậu tìm ra cách được thừa nhận và chú ý duy nhất qua các trò phá phách và nghịch ngợm. Sau khi Naruto tìm được hai người bạn đồng hành là Uchiha Sasuke và Haruno Sakura, cuộc phiêu lưu bắt đầu. ',3,1,'2023-04-02',1),

(N'Kimetsu No Yaiba "Thanh Gươm Diệt Quỷ" | Season 2 ','https://www.youtube.com/embed/EPZpL0OD3Ak','mugen-train.jpg',15,N'ĐÂY LÀ VIDEO TÓM TẮT , KHÔNG PHẢI REVIEW !!

Link các phần tiếp theo:
Season 1:   

 • ALL IN ONE "Thanh...  
Movie (Chuyến tàu vô tận): https://www.bilibili.tv/en/video/2004...
Season 2:   

 • ALL IN ONE "Thanh...  

Trong quá trình tóm tắt, nếu có sai ý hay sai nội dung mong các bạn góp ý để kệnh bọn mình tiếp thu và rút kinh nghiệm cho những video dài tập ở những lần sau.

Biên soạn có sai tên nhân vật Mokomo thành Momoko dẫn đến phần thu bị sai, mong các bạn bỏ qua ạ.

Theo dõi tụi mình ở các nền tảng khác:
+ Group : https://bom.to/PYA5OC
+ Fanpage: https://bom.to/hYfXIC
+ Tiktok: https://www.tiktok.com/@alanimeofficial
+ Instagram: https://www.instagram.com/alanime.off...

Chào mừng các bạn đã đến với Al Anime nơi chúng ta sẽ cùng đi qua lại sơ lược những bộ Anime vang bóng một thời.
Chúng ta sẽ tập trung chủ yếu vào tóm tắt những chi tiết và diễn biến chính trong từng bộ Anime.
Hãy cùng nhau theo dõi hành trình này nhe!
► Subscribe: https://bom.to/YekzMfmM

Tất cả những hình ảnh và âm thanh đều thuộc sở hữu bản quyền của tác giả và nhà sản xuất phim. 
Al Anime không sở hữu bất kì hình ảnh nào. 
Nếu bọn mình vi phạm hình ảnh bản quyền video hay âm thanh, xin hãy liên hệ qua gmail: kutroll9601@gmail.com
Bọn mình sẽ xóa toàn bộ. Xin chân thành cảm ơn mọi người!',6,0,'2023-04-02',1),


--
(3, N'Dr.Stone Anime Khoa Học Full Season 1','https://www.youtube.com/embed/NsFgHFNyIqQ','dr-stone.jpg',20,N'Dr. Stone (cách điệu là Dr.STONE) là một bộ truyện tranh Nhật Bản được viết bởi Riichiro Inagaki và minh họa bởi nghệ sĩ Hàn Quốc Boichi. Nó được đăng nhiều kỳ trên Weekly Shōnen Jump của Shueisha từ tháng 2017 năm 2022 đến tháng 26 năm 3, với các chương được thu thập trong 700 tập tankōbon. Câu chuyện kể về Senku Ishigami, một thiên tài khoa học có kế hoạch xây dựng lại nền văn minh sau khi loài người bị hóa đá một cách bí ẩn trong <>.<> năm.

Ở Bắc Mỹ, manga được cấp phép bởi Viz Media. Shueisha bắt đầu mô phỏng bộ truyện bằng tiếng Anh trên trang web và ứng dụng Manga Plus vào tháng 2019 năm 2019. Một bộ anime truyền hình chuyển thể do TMS Entertainment sản xuất, được phát sóng trên Tokyo MX từ tháng 2021 đến tháng 2023 năm 2022. Mùa thứ hai của loạt anime tập trung vào phần "Stone Wars" được phát sóng từ tháng <> đến tháng <> năm <>. Phần thứ ba được công chiếu vào tháng <> năm <>. Một chương trình truyền hình đặc biệt mang tên Dr. Stone: Ryusui được công chiếu vào tháng <>/<>.

Đến tháng 2022/14, manga đã có hơn 2019 triệu bản được lưu hành. Năm 64, Dr. Stone đã giành được Giải thưởng Manga Shogakukan lần thứ <> cho thể loại shōnen.',4,0,'2023-04-02',1),

--
(4, N'5cm/s - Shinkai Makoto','https://www.youtube.com/embed/-oh7s9pxXa0','5cm-s.jpg',19,N'Bộ phim lần theo cuộc đời của Tōno Takaki từ những năm Tiểu học cho tới khi trưởng thành. Từ nhỏ, Takaki đã quen với việc di chuyển chỗ ở theo công việc của gia đình. Từng phần của bộ phim lần lượt kể cho người xem những dấu mốc quan trọng trong cuộc đời cậu. Cuối cùng, người bạn thời thơ ấu cùng những ký niệm với những lời hứa, cuộc chia tay và cả nước mắt sẽ ảnh hưởng tới Takaki như thế nào trong cuộc đời vẫn đang trải dài trước mắt? Liệu cậu sẽ quên đi quá khứ, và hướng về tương lai hay vẫn day dứt, luyến tiếc về một ký ức xa vời? Câu trả lời dường như dành cho chính người xem trả lời sau khi bộ phim kết thúc.

5 Centimet trên giây là một phim anime do Shinkai Makoto đạo diễn và hãng CoMix Wave thực hiện. Bộ phim được công chiếu lần đầu vào ngày 03 tháng 3 năm 2007 tại rạp ở Shibuya, Tokyo
------------------------kinokiki senpai-------------------------
Bản quyền thuộc phimmoi.net vui lòng khong reup - vui lòng trước khi lấy video hãy gửi vào gmail - 
stromingerzoe81@gmail.com',5,0,'2023-04-02',1),

--
(5, N'Harehare Ya x Cô bé người cá Ponyo ( Lyrics + Vietsub)','https://www.youtube.com/embed/6DvbXvfgRIg','co-be-nguoi-ca-ponyo.jpg',10, 
N'Gake no Ue no Ponyo (崖の上のポニョ, がけのうえのポニョ) có thể gọi tắt thành Ponyo, là một bộ phim anime thực hiện bởi Studio Ghibli công chiếu năm 2008, Miyazaki Hayao đã đạo diễn và viết kịch bản cho bộ phim. Đây là bộ phim thứ tám mà Miyazaki đảm nhiệm thực hiện cho Ghibli và là phim thứ mười của ông. Cốt truyện xoay quanh một cô bé cá vàng tên Polumisharudin muốn trở thành người, cô đã kết bạn với một cậu bé năm tuổi tên Sōsuke và được cậu đặt tên là Ponyo.

Phim đạt được nhiều giải thưởng khác nhau trong đó có giải dành cho phim hoạt hình hay nhất năm của Viện Hàn lâm Nhật Bản. Phim được công chiếu tại Nhật Bản vào ngày 19 tháng 7 năm 2008, tại Bắc Mỹ vào ngày 14 tháng 8 năm 2009 và tại Anh ngày 12 tháng 2 năm 2010. Bộ phim đứng hạng 9 về những phim có doanh thu cao nhất trong tuần đầu tiên công chiếu tại Hoa Kỳ.',
5,2,'2023-04-02',1),


--
(6, N'Ngôi mộ đom đóm - Phim hoạt hình Nhật Bản.','https://www.youtube.com/embed/hLYequ6V_7M','mo-dom-dom.jpg',10453, 
N'Kịch bản phim được dựa theo cuốn bán tiểu thuyết dưới dạng bán tự truyện cùng tên của tác giả Nosaka Akiyuki, ông đã mất một người em gái vì thiếu ăn vào giai đoạn chiến tranh năm 1945 ở Nhật Bản. Tác giả luôn cho rằng mình phải chịu trách nhiệm về cái chết đó và ông viết cuốn tiểu thuyết như để đền bù cho em gái mình và cũng để giúp ông chấp nhận bi kịch của quá khứ.
Vì bộ phim chứa đựng rất nhiều những hình vẽ và sự mô tả rất xúc động những hậu quả khủng khiếp của chiến tranh đối với xã hội và từng cá nhân trong đó, nhiều nhà phê bình đã coi Mộ Đom đóm là một bộ phim phản chiến. Bộ phim cũng cung cấp cho người xem một cái nhìn từ bên trong về văn hóa Nhật Bản khi tập trung vào miêu tả bi kịch của con người bởi chiến tranh hơn là tìm cách ca ngợi những hành động anh hùng.
Một cách nhìn khác về Mộ Đom đóm cho rằng bộ phim miêu tả sự nguy hiểm khi con người đặt lòng tự trọng của họ cao hơn lý trí. Cách hiểu đặc biệt này được chính đạo diễn Takahata nói tới trong một cuộc phỏng vấn ông cho lần phát hành DVD của bộ phim năm 2002. Ông đã bày tỏ sự ngạc nhiên của mình trước sự cảm thông của khán giả với Seita thay vì nhận ra rằng chính hành động của cậu bé đã dẫn tới cái chết của em gái mình. Nhân vật thể hiện hình ảnh của nhà văn Nosaka, cậu bé Seita phải đối diện với một lựa chọn quyết định (khi cậu rời khỏi nhà của bà dì và khi người nông dân từ chối nhận cậu), đó là hoặc ở lại với người dì ích kỷ, làm việc và đối diện với sự thật, hoặc là chạy trốn. Cuối cùng Seita đã lựa chọn lòng kiêu hãnh thay vì lý trí, và số phận của cậu cũng như của Setsuko chính là kết quả của lựa chọn đó khi hai anh em rời khỏi nhà bà dì. Nếu ở lại, gần như chắc chắn hai anh em sẽ sống sót. Hơn nữa, đã có những ý kiến cho rằng nếu như bộ phim thực sự dựa vào cuốn tiểu thuyết (vốn là một lời xin lỗi cá nhân của tác giả với em gái mình) thì rõ ràng là rất khó để coi Mộ Đom đóm là một bộ phim phản chiến thực sự.
Khái quát hơn, vì rằng những vết thương của Seita là do chính cậu gây nên, và nó cũng dẫn tới cái chết của Setsuko, nên có thể hiểu rằng đó là sự chỉ trích tới sự tham gia của Nhật Bản trong Chiến tranh thế giới 2: Lòng kiêu hãnh của người Nhật đã làm đất nước Nhật Bản thiệt hại nặng nề.',
5,2,'2023-04-02',1),

--


(7, N'MY HERO ACADEMIA / 4期文化祭編','https://www.youtube.com/embed/GgwUenaQqlM','my-hero-academia.jpg',244, 
N'"Hero too"
作詞：あやぺた (from Dizzy Sunfist)　Lyrics by Ayapeta
作曲：林ゆうき　Music by Yuki Hayashi
歌：耳郎響香 KYOKA JIRO Starring Chrissy Costanza
ダンス振付：振付稼業air:man

TVアニメ『僕のヒーローアカデミア』"ヒロアカ" 4期文化祭編クライマックス、雄英高校文化祭でヒーロー科1年A組メンバーが披露したオリジナル曲「Hero too」MV！作曲はヒロアカ劇中音楽を手掛ける林ゆうき、全編英語の作詞はロックバンドDizzy Sunfistのあやぺた、歌は米ロックバンドAgainst The CurrentのボーカルChrissy Costanza(クリッシー・コスタンザ）！さらにダンスメンバーの振付は振付ユニット「振付稼業air:man」！

＜スタッフ＞
原作：堀越耕平（集英社「週刊少年ジャンプ」連載）
総監督：長崎健司／監督：向井雅浩／シリーズ構成・脚本：黒田洋介（スタジオオルフェ）／キャラクターデザイン：馬越嘉彦／音楽：林ゆうき／アニメーション制作：ボンズ
4期第2クールオープニングテーマ：「スターマーカー」KANA-BOON
4期第2クールエンディングテーマ：「Shout Baby」緑黄色社会
＜キャスト＞
緑谷出久：山下大輝／通形ミリオ：新垣樽助／エリ：小林星蘭／爆豪勝己：岡本信彦／麗日お茶子：佐倉綾音／飯田天哉：石川界人／轟焦凍：梶裕貴／耳郎響香：真堂 圭／芦戸三奈：喜多村英梨／切島鋭児郎：増田俊樹／蛙吹梅雨：悠木碧／八百万百：井上麻里奈／常闇踏陰：細谷佳正／上鳴電気：畠中祐／天喰環：上村祐翔／波動ねじれ：安野希世乃／発目明：櫻井馨織／相澤消太：諏訪部順一／オールマイト：三宅健太／ラブラバ：堀江由衣／ジェントル・クリミナル：山寺宏一',
5,2,'2023-04-02',1),


--
(8, N'Yu-Gi-Oh! The Dark side of Dimension. The return of Atem!','https://www.youtube.com/embed/-I77so2-pto','yugioh-the-dark-side-of-dimensions.jpg',10, 
N'Khi câu chuyện bắt đầu, KaibaCorp đang nghiên cứu về Câu đố Thiên niên kỷ. Đột nhiên, một người đàn ông mặc áo choàng bí ẩn được nhìn thấy tại ngôi đền dưới lòng đất khi một trong những vệ sĩ của Seto Kaiba nói với anh ta rằng anh ta đang chậm tiến độ và để đẩy nhanh tiến độ của mình. Sáu tháng sau sự ra đi của Pharaoh ("một năm" trong phiên bản lồng tiếng), Yugi Muto và những người bạn thân nhất của mình đang chuẩn bị tốt nghiệp trường trung học Domino và đang nói về những gì họ sẽ làm trong tương lai.

Trong khi đó, Seto Kaiba đã ủy thác một cuộc khai quật để lấy Câu đố Thiên niên kỷ đã tháo rời từ đống đổ nát của căn phòng Thiên niên kỷ. Vật phẩm này trước đây chứa linh hồn của đối thủ lâu năm của ông, Pharaoh Atem, một phiên bản Ai Cập của Yugi, từ thời Ai Cập mà ông hy vọng sẽ "sống lại" để giải quyết điểm số cổ xưa của họ',
5,2,'2023-04-02',1),


--
(9, N'Sparkle | Your Name AMV','https://www.youtube.com/embed/-pHfPJGatgE','your-name.jpg',130, 
N'Nhắc tới những bậc thầy trong ngành công nghiệp Anime, có rất nhiều cái tên có thể được nêu ra. Tuy nhiên trong những năm gần đây, cái tên Shinkai Makoto không chỉ nổi tiếng trong cộng đồng yêu thích Anime, mà còn phủ sóng rộng hơn rất nhiều. Khởi đầu là một Họa sỹ thiết kế game, Makoto dần lấn sân sang lĩnh vực phim hoạt hình và nhanh chóng đạt được những thành công lớn. 

Được mệnh danh là “Phù thủy của những nỗi buồn”, Shinkai Makoto luôn biết cách kết hợp phần hình ảnh đẹp mê đắm với sự thấu hiểu sâu sắc về nỗi niềm trong mỗi con người, từ đó vẽ nên những câu chuyện kỳ diệu ghi dấu sâu đậm trong lòng khán giả. Từ những gam màu hồng tím đầy cô đơn trong 5c/m, hay màu xanh tươi đầy hi vọng trong The Garden of Words, và gần đây nhất là Your Name hay tên tiếng Nhật là Kimi no Nawa, một sự tổng hòa hoàn hảo nhất của những yếu tố làm nên phong cách của Shinkai Makoto. Và trong video này, chúng ta sẽ cùng nhau tìm hiểu vì sao Your Name lại thành công đến như vậy nhé! Chúng ta cùng bắt đầu thôi.',
5,2,'2023-04-02',1)


INSERT INTO history VALUES
(1, 'phuocnhh',1,'2023-04-02',1,'2023-04-02'),
(2, 'phuocnhh',2,'2023-04-02',1,'2023-04-02'),
(3, 'phuocnhh',3,'2023-04-02',1,'2023-04-02'),
(4, 'phuocnhh',4,'2023-04-02',1,'2023-04-02'),
(5, 'phuocnhh',5,'2023-04-02',1,'2023-04-02'),
(6, 'nganntd',1,'2023-04-02',1,'2023-04-02'),
(7, 'nganntd',2,'2023-04-02',1,'2023-04-02'),
(8, 'nganntd',3,'2023-04-02',1,'2023-04-02'),
(9, 'nganntd',4,'2023-04-02',1,'2023-04-02'),
(10, 'nganntd',5,'2023-04-02',1,'2023-04-02'),
(11, 'hanltn',1,'2023-04-02',1,'2023-04-02'),
(12, 'hanltn',2,'2023-04-02',1,'2023-04-02'),
(13, 'hanltn',3,'2023-04-02',1,'2023-04-02'),
(14, 'hanltn',4,'2023-04-02',1,'2023-04-02'),
(15, 'hanltn',5,'2023-04-02',1,'2023-04-02'),
(16, 'duyenttm',1,'2023-04-02',1,'2023-04-02'),
(17, 'duyenttm',3,'2023-04-02',1,'2023-04-02'),
(18, 'duyenttm',4,'2023-04-02',1,'2023-04-02'),
(19, 'duyenttm',5,'2023-04-02',1,'2023-04-02'),
(20, 'datnt',1,'2023-04-02',1,'2023-04-02'),
(21, 'datnt',3,'2023-04-02',1,'2023-04-02'),
(22, 'datnt',4,'2023-04-02',1,'2023-04-02'),
(23, 'dangth',4,'2023-04-02',1,'2023-04-02');


INSERT into sharevideo VALUES 
(1, 'phuocnhh',1,'nganntd@gmail.com','2023-04-02'),
(2, 'phuocnhh',2,'nganntd@gmail.com','2023-04-02'),
(3, 'phuocnhh',3,'nganntd@gmail.com','2023-04-02'),
(4, 'nganntd',3,'phuocnhh@gmail.com','2023-04-02'),
(5, 'hanltn',1,'phuocnhh@gmail.com','2023-04-02'),
(6, 'hanltn',3,'phuocnhh@gmail.com','2023-04-02')

