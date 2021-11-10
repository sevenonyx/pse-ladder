/* 
const day0 = [
  [
    {
      kor: "",
      eng: "",
    },
    {
      kor: "",
      eng: "",
    },
    {
      kor: "",
      eng: "",
    },
    {
      kor: "",
      eng: "",
    },
  ],
];
*/

const day3 = [
  [
    {
      kor: "이거 내 텀블러야.",
      eng: "This is my tumbler.",
    },
    {
      kor: "이거 내 텀블러야?",
      eng: "Is this my tumbler?",
    },
    {
      kor: "이거 내 텀블러 아니야.",
      eng: "This isn't my tumbler.",
    },
    {
      kor: "이거 내 텀블러 아니야?",
      eng: "Isn't this my tumbler?",
    },
  ],
  [
    {
      kor: "이 사람은 내 여동생/누나/언니야.",
      eng: "This is my  sister.",
    },
    {
      kor: "이 사람은 네 여동생/누나/언니야?",
      eng: "Is this your sister?",
    },
    {
      kor: "이 사람은 내 여동생/누나/언니가 아니야.",
      eng: "This isn't my sister.",
    },
    {
      kor: "이 사람은 네 여동생/누나/언니가 아니야?",
      eng: "Isn't this your sister?",
    },
  ],
  [
    {
      kor: "얘는 내 반 친구야.",
      eng: "This is my classmate.",
    },
    {
      kor: "얘는 네 반 친구야?",
      eng: "Is this your classmate?",
    },
    {
      kor: "얘는 내 반 친구가 아니야.",
      eng: "This isn't my classmate.",
    },
    {
      kor: "얘는 네 반 친구가 아니야?",
      eng: "Isn't this your classmate?",
    },
  ],
  [
    {
      kor: "저거 네 충전기야.",
      eng: "That is your charger.",
    },
    {
      kor: "저거 내 충전기야?",
      eng: "Is that my charger?",
    },
    {
      kor: "저거 네 충전기 아니야.",
      eng: "That isn't your charger.",
    },
    {
      kor: "저거 내 충전기 아니야?",
      eng: "Isn't that my charger?",
    },
  ],
  [
    {
      kor: "저거 그 남자 USB야.",
      eng: "That is his flash drive.",
    },
    {
      kor: "저거 그 남자 USB야?",
      eng: "Is that his flash drive?",
    },
    {
      kor: "저거 그 남자 USB 아니야.",
      eng: "That isn't his flash drive.",
    },
    {
      kor: "저거 그 남자 USB 아니야?",
      eng: "Isn't that his flash drive?",
    },
  ],
  [
    {
      kor: "이거 Robin 화장품이야.",
      eng: "This is Robin's makeup.",
    },
    {
      kor: "이거 Robin 화장품이야?",
      eng: "Is this Robin's makeup?",
    },
    {
      kor: "이거 Robin 화장품 아니야.",
      eng: "This isn't Robin's makeup.",
    },
    {
      kor: "이거 Robin 화장품 아니야?",
      eng: "Isn't this Robin's makeup?",
    },
  ],
  [
    {
      kor: "이건 우리 점심이야.",
      eng: "This is our lunch.",
    },
    {
      kor: "이건 우리 점심이야?",
      eng: "Is this our lunch?",
    },
    {
      kor: "이건 우리 점심 아니야.",
      eng: "This isn't our lunch.",
    },
    {
      kor: "이건 우리 점심 아니야?",
      eng: "Isn't this our lunch?",
    },
  ],
  [
    {
      kor: "이건 걔들 필기야.",
      eng: "These are their notes.",
    },
    {
      kor: "이건 걔들 필기야?",
      eng: "Are these their notes?",
    },
    {
      kor: "이건 걔들 필기가 아니야.",
      eng: "These aren't their notes.",
    },
    {
      kor: "이건 걔들 필기가 아니야?",
      eng: "Aren't these their notes?",
    },
  ],
  [
    {
      kor: "저건 걔들 선물(복수)이야.",
      eng: "Those are their presents.",
    },
    {
      kor: "저건 걔들 선물(복수)이야?",
      eng: "Are those their presents?",
    },
    {
      kor: "저건 걔들 선물(복수) 아니야.",
      eng: "Those aren't their presents.",
    },
    {
      kor: "저건 걔들 선물(복수) 아니야?",
      eng: "Aren't those their presents?",
    },
  ],
  [
    {
      kor: "이쪽은 내 선배야.",
      eng: "This is my upperclassman.",
    },
    {
      kor: "이쪽은 네 선배야?",
      eng: "Is this your upperclassman?",
    },
    {
      kor: "이쪽은 내 선배가 아니야.",
      eng: "This isn't my upperclassman.",
    },
    {
      kor: "이쪽은 네 선배가 아니야?",
      eng: "Isn't this your upperclassman?",
    },
  ],
  [
    {
      kor: "이 휴대전화는 그 남자 거야.",
      eng: "This cellphone is his.",
    },
    {
      kor: "이 휴대전화는 그 남자 거야?",
      eng: "Is this cellphone his?",
    },
    {
      kor: "이 휴대전화는 그 남자거 아니야.",
      eng: "This cellphone isn't his.",
    },
    {
      kor: "이 휴대전화는 그 남자거 아니야?",
      eng: "Isn't this cellphone his?",
    },
  ],
  [
    {
      kor: "저 물건은 Chris 거야.",
      eng: "That stuff is Chris's.",
    },
    {
      kor: "저 물건은 Chris 거야?",
      eng: "Is that stuff Chris's?",
    },
    {
      kor: "저 물건은 Chris 거 아니야.",
      eng: "That stuff isn't Chris's.",
    },
    {
      kor: "저 물건은 Chris 거 아니야?",
      eng: "Isn't that stuff Chris's?",
    },
  ],
  [
    {
      kor: "저 쓰레기는 네 거야.",
      eng: "That trash is yours.",
    },
    {
      kor: "저 쓰레기는 네 거야?",
      eng: "Is that trash yours?",
    },
    {
      kor: "저 쓰레기는 네 거 아니야.",
      eng: "That trash isn't yours.",
    },
    {
      kor: "저 쓰레기는 네 거 아니야?",
      eng: "Isn't that trash yours?",
    },
  ],
  [
    {
      kor: "이 SUV(복수)는 그 사람들 거야.",
      eng: "These SUVs are theirs.",
    },
    {
      kor: "이 SUV(복수)는 그 사람들 거야?",
      eng: "Are these SUVs theirs?",
    },
    {
      kor: "이 SUV(복수)는 그 사람들 거 아니야.",
      eng: "These SUVs aren't theirs.",
    },
    {
      kor: "이 SUV(복수)는 그 사람들 거 아니야?",
      eng: "Aren't these SUVs theirs?",
    },
  ],
  [
    {
      kor: "이 잔돈은 내 거야.",
      eng: "This change is mine.",
    },
    {
      kor: "이 잔돈은 내 거야?",
      eng: "Is this change mine?",
    },
    {
      kor: "이 잔돈은 내 거 아니야.",
      eng: "This change isn't mine.",
    },
    {
      kor: "이 잔돈은 내 거 아니야?",
      eng: "Isn't this change mine?",
    },
  ],
  [
    {
      kor: "저 워커는 Steve 거야.",
      eng: "Those boots are Steve's.",
    },
    {
      kor: "저 워커는 Steve 거야?",
      eng: "Are those boots Steve's?",
    },
    {
      kor: "저 워커는 Steve 거 아니야.",
      eng: "Those boots aren't Steve's.",
    },
    {
      kor: "저 워커는 Steve 거 아니야?",
      eng: "Aren't those boots Steve's?",
    },
  ],
  [
    {
      kor: "이 자전거는 William 거야.",
      eng: "This bike is William's.",
    },
    {
      kor: "이 자전거는 William 거야?",
      eng: "Is this bike William's?",
    },
    {
      kor: "이 자전거는 William 거 아니야.",
      eng: "This bike isn't William's.",
    },
    {
      kor: "이 자전거는 William 거 아니야?",
      eng: "Isn't this bike William's?",
    },
  ],
  [
    {
      kor: "저 니트(복수)는 우리 거야.",
      eng: "Those sweaters are ours.",
    },
    {
      kor: "저 니트(복수)는 우리 거야?",
      eng: "Are those sweaters ours?",
    },
    {
      kor: "저 니트(복수)는 우리 거 아니야.",
      eng: "Those sweaters aren't ours.",
    },
    {
      kor: "저 니트(복수)는 우리 거 아니야?",
      eng: "Aren't those sweaters ours?",
    },
  ],
  [
    {
      kor: "이 유인물(복수)은 우리 선생님들 거야.",
      eng: "These handouts are our teachers'.",
    },
    {
      kor: "이 유인물(복수)은 우리 선생님들 거야?",
      eng: "Are these handouts our teachers'?",
    },
    {
      kor: "이 유인물(복수)은 우리 선생님들 거 아니야.",
      eng: "These handouts aren't our teachers'.",
    },
    {
      kor: "이 유인물(복수)은 우리 선생님들 거 아니야?",
      eng: "Aren't these handouts our teachers'?",
    },
  ],
  [
    {
      kor: "저 후드 티는 그 여자 거야.",
      eng: "That hoodie is hers.",
    },
    {
      kor: "저 후드 티는 그 여자 거야?",
      eng: "Is that hoodie hers?",
    },
    {
      kor: "저 후드 티는 그 여자 거 아니야.",
      eng: "That hoodie isn't hers.",
    },
    {
      kor: "저 후드 티는 그 여자 거 아니야?",
      eng: "Isn't that hoodie hers?",
    },
  ],
];

const day4 = [
  [
    {
      kor: "걔(여자), 귀여워.",
      eng: "She is cute.",
    },
    {
      kor: "걔(여자), 귀여워?",
      eng: "Is she cute?",
    },
    {
      kor: "걔(여자), 귀엽지 않아.",
      eng: "She isn't cute.",
    },
    {
      kor: "걔(여자), 귀엽지 않아?",
      eng: "Isn't she cute?",
    },
  ],
  [
    {
      kor: "걔(남자), 매력있어.",
      eng: "He is attractive.",
    },
    {
      kor: "걔(남자), 매력있어?",
      eng: "Is he attractive?",
    },
    {
      kor: "걔(남자), 매력 없어.",
      eng: "He isn't attractive.",
    },
    {
      kor: "걔(남자), 매력 없어?",
      eng: "Isn't he attractive?",
    },
  ],
  [
    {
      kor: "나 돈이 다 떨어졌어.",
      eng: "I'm broke.",
    },
    {
      kor: "너 돈이 다 떨어졌어?",
      eng: "Are you broke?",
    },
    {
      kor: "나 돈 다 안 떨어졌어.",
      eng: "I'm not broke.",
    },
    {
      kor: "너 돈 다 안 떨어졌어?",
      eng: "Aren't you broke?",
    },
  ],
  [
    {
      kor: "우리 아빠는 무서워.",
      eng: "My father is scary.",
    },
    {
      kor: "너희 아빠는 무서워?",
      eng: "Is your father scary?",
    },
    {
      kor: "우리 아빠는 무섭지 않아.",
      eng: "My father isn't scary.",
    },
    {
      kor: "너희 아빠는 무섭지 않아?",
      eng: "Isn't your father scary?",
    },
  ],
  [
    {
      kor: "오늘의 수업은 중요해.",
      eng: "Today's class is important.",
    },
    {
      kor: "오늘의 수업은 중요해?",
      eng: "Is today's class important?",
    },
    {
      kor: "오늘의  수업은 중요하지 않아.",
      eng: "Today's class isn't important.",
    },
    {
      kor: "오늘의 수업은 중요하지 않아?",
      eng: "Isn't today's class important?",
    },
  ],
  [
    {
      kor: "걔(남자), 목소리가 커.",
      eng: "He is loud.",
    },
    {
      kor: "걔(남자), 목소리가 커?",
      eng: "Is he loud?",
    },
    {
      kor: "걔(남자), 목소리 안 커.",
      eng: "He isn't loud.",
    },
    {
      kor: "걔(남자), 목소리 안 커?",
      eng: "Isn't he loud?",
    },
  ],
  [
    {
      kor: "걔(여자) 친구들은 무례해.",
      eng: "Her friends are rude.",
    },
    {
      kor: "걔(여자) 친구들은 무례해?",
      eng: "Are her friends rude?",
    },
    {
      kor: "걔(여자) 친구들은 무례 하지 않아.",
      eng: "Her friends aren't rude.",
    },
    {
      kor: "걔(여자) 친구들은 무례 하지 않아?",
      eng: "Aren't her friends rude?",
    },
  ],
  [
    {
      kor: "저 남자 애들은 잘 생겼어.",
      eng: "Those guys are good-looking.",
    },
    {
      kor: "저 남자 애들은 잘 생겼어?",
      eng: "Are those guys good-looking?",
    },
    {
      kor: "저 남자 애들은 잘 생기지 않았어.",
      eng: "Those guys aren't good-looking.",
    },
    {
      kor: "저 남자 애들은 잘 생기지 않았어?",
      eng: "Aren't those guys good-looking?",
    },
  ],
  [
    {
      kor: "우리 조원들은 늦어.",
      eng: "My group members are late.",
    },
    {
      kor: "너희 조원들은 늦어?",
      eng: "Are your group members late?",
    },
    {
      kor: "우리 조원들은 늦지 않아.",
      eng: "My group members aren't late.",
    },
    {
      kor: "너희 조원들은 늦지 않아?",
      eng: "Aren't your group members late?",
    },
  ],
  [
    {
      kor: "그 시험은 어려워.",
      eng: "The test is difficult.",
    },
    {
      kor: "그 시험은 어려워?",
      eng: "Is the test difficult?",
    },
    {
      kor: "그 시험은 어렵지 않아.",
      eng: "The test isn't difficult.",
    },
    {
      kor: "그 시험은 어렵지 않아?",
      eng: "Isn't the test difficult?",
    },
  ],
  [
    {
      kor: "이 요리(복수)는 인기가 많아.",
      eng: "These dishes are popular.",
    },
    {
      kor: "이 요리(복수)는 인기가 많아?",
      eng: "Are these dishes popular?",
    },
    {
      kor: "이 요리(복수)는 인기가 없어.",
      eng: "These dishes aren't popular.",
    },
    {
      kor: "이 요리(복수)는 인기가 없어?",
      eng: "Aren't these dishes popular?",
    },
  ],
  [
    {
      kor: "그 답은 틀렸어.",
      eng: "The answer is wrong.",
    },
    {
      kor: "그 답은 틀렸어?",
      eng: "Is the answer wrong?",
    },
    {
      kor: "그 답은 틀리 지 않았어.",
      eng: "The answer isn't wrong.",
    },
    {
      kor: "그 답은 틀리 지 않았어?",
      eng: "Isn't the answer wrong?",
    },
  ],
  [
    {
      kor: "우리 남동생/형/오빠는 솔로야.",
      eng: "My brother is single.",
    },
    {
      kor: "너희 남동생/형/오빠는 솔로야?",
      eng: "Is your brother single?",
    },
    {
      kor: "우리 남동생/형/오빠는 솔로 아니야.",
      eng: "My brother isn't single.",
    },
    {
      kor: "너희 남동생/형/오빠는 솔로 아니야?",
      eng: "Isn't your brother single?",
    },
  ],
  [
    {
      kor: "PSE는 (사람들로) 붐비는 곳이야.",
      eng: "PSE is a crowded place.",
    },
    {
      kor: "PSE는 (사람들로) 붐비는 곳이야?",
      eng: "Is PSE a crowded place?",
    },
    {
      kor: "PSE는 (사람들로) 붐비는 곳이 아니야.",
      eng: "PSE isn't a crowded place.",
    },
    {
      kor: "PSE는 (사람들로) 붐비는 곳 아니야?",
      eng: "Isn't PSE a crowded place?",
    },
  ],
  [
    {
      kor: "걔(여자) 남자친구는 좋은 남자야.",
      eng: "Her boyfriend is a good guy.",
    },
    {
      kor: "걔(여자) 남자친구는 좋은 남자야?",
      eng: "Is her boyfriend a good guy?",
    },
    {
      kor: "걔(여자) 남자친구는 좋은 남자 아니야.",
      eng: "Her boyfriend isn't a good guy.",
    },
    {
      kor: "걔(여자) 남자친구는 좋은 남자 아니야?",
      eng: "Isn't her boyfriend a good guy?",
    },
  ],
  [
    {
      kor: "이거 웃긴 영화야.",
      eng: "This is a funny movie.",
    },
    {
      kor: "이거 웃긴 영화야?",
      eng: "Is this a funny movie?",
    },
    {
      kor: "이거 웃긴 영화 아니야.",
      eng: "This isn't a funny movie.",
    },
    {
      kor: "이거 웃긴 영화 아니야?",
      eng: "Isn't this a funny movie?",
    },
  ],
  [
    {
      kor: "이거 (도수가) 센 술이야.",
      eng: "This is a strong drink.",
    },
    {
      kor: "이거 (도수가) 센 술이야?",
      eng: "Is this a strong drink?",
    },
    {
      kor: "이거 (도수가) 센 술 아니야.",
      eng: "This isn't a strong drink.",
    },
    {
      kor: "이거 (도수가) 센 술 아니야?",
      eng: "Isn't this a strong drink?",
    },
  ],
  [
    {
      kor: "William은 입맛이 까다로워.",
      eng: "William is a picky eater.",
    },
    {
      kor: "William은 입맛이 까다로워?",
      eng: "Is William a picky eater?",
    },
    {
      kor: "William은 입맛이 까다롭지 않아.",
      eng: "William isn't a picky eater.",
    },
    {
      kor: "William은 입맛이 까다롭지 않아?",
      eng: "Isn't William a picky eater?",
    },
  ],
];

const day5 = [
  [
    {
      kor: "우리 학원은 강남역 근처에 있어.",
      eng: "My academy is near Gangnam Station.",
    },
    {
      kor: "너희 학원은 강남역 근처에 있어?",
      eng: "Is your academy near Gangnam Station?",
    },
    {
      kor: "우리 학원은 강남역 근처에 있지 않아.",
      eng: "My academy isn't near Gangnam Station.",
    },
    {
      kor: "너희 학원은 강남역 근처에 있지 않아?",
      eng: "Isn't your academy near Gangnam Station?",
    },
  ],
  [
    {
      kor: "내 친구들은 술집에 있어.",
      eng: "My friends are at a bar.",
    },
    {
      kor: "네 친구들은 술집에 있어?",
      eng: "Are your friends at a bar?",
    },
    {
      kor: "내 친구들은 술집에 있지 않아.",
      eng: "My friends aren't at a bar.",
    },
    {
      kor: "네 친구들은 술집에 있지 않아?",
      eng: "Aren't your friends at a bar?",
    },
  ],
  [
    {
      kor: "네 지갑이 내 책상 위에 있어.",
      eng: "Your wallet is on my desk.",
    },
    {
      kor: "내 지갑이 내 책상 위에 있어?",
      eng: "Is my wallet on my desk?",
    },
    {
      kor: "네 지갑은 내 책상 위에 있지 않아.",
      eng: "Your wallet isn't on my desk.",
    },
    {
      kor: "내 지갑은 내 책상 위에 있지 않아?",
      eng: "Isn't my wallet on my desk?",
    },
  ],
  [
    {
      kor: "리모컨은 소파 밑에 있어.",
      eng: "The remote is under the couch.",
    },
    {
      kor: "리모컨은 소파 밑에 있어?",
      eng: "Is the remote under the couch?",
    },
    {
      kor: "리모컨은 소파 밑에 있지 않아.",
      eng: "The remote isn't under the couch.",
    },
    {
      kor: "리모컨은 소파 밑에 있지 않아?",
      eng: "Isn't the remote under the couch?",
    },
  ],
  [
    {
      kor: "헬스장은 골목을 돌아서 있어.",
      eng: "The gym is around the corner.",
    },
    {
      kor: "헬스장은 골목을 돌면 있어?",
      eng: "Is the gym around the corner?",
    },
    {
      kor: "헬스장은 골목을 돌아도 있지 않아.",
      eng: "The gym isn't around the corner.",
    },
    {
      kor: "헬스장은 골목을 돌면 있지 않아?",
      eng: "Isn't the gym around the corner?",
    },
  ],
  [
    {
      kor: "병원(동네병원)은 이 길로 내려가면 있어요.",
      eng: "The doctor's office is down this street.",
    },
    {
      kor: "병원(동네병원)은 이 길로 내려가면 있어요?",
      eng: "Is the doctor's office down this street?",
    },
    {
      kor: "병원(동네병원)은 이 길로 내려가면 있지 않아요.",
      eng: "The doctor's office isn't down this street.",
    },
    {
      kor: "병원(동네병원)은 이길로 내려가면 있지 않아요?",
      eng: "Isn't the doctor's office down this street?",
    },
  ],
  [
    {
      kor: "현금인출기는 편의점 앞에 있어요.",
      eng: "The ATM is in front of the convenience store.",
    },
    {
      kor: "현금인출기는 편의점 앞에 있어요? ",
      eng: "Is the ATM in front of the convenience store?",
    },
    {
      kor: "현금인출기는 편의점 앞에 있지 않아요.",
      eng: "The ATM isn't in front of the convenience store.",
    },
    {
      kor: "현금인출기는 편의점 앞에 있지 않아요?",
      eng: "Isn't the ATM in front of the convenience store?",
    },
  ],
  [
    {
      kor: "(순서가) 난 Steve 다음이야.",
      eng: "I'm after Steve.",
    },
    {
      kor: "(순서가) 넌 Steve 다음이야?",
      eng: "Are you after Steve?",
    },
    {
      kor: "(순서가) 난 Steve 다음이 아니야.",
      eng: "I'm not after Steve.",
    },
    {
      kor: "(순서가) 넌 Steve 다음 아니야?",
      eng: "Aren't you after Steve?",
    },
  ],
  [
    {
      kor: "걔(남자)는 화장실에 있어.",
      eng: "He is in the bathroom.",
    },
    {
      kor: "걔 화장실에 있어?",
      eng: "Is he in the bathroom?",
    },
    {
      kor: "걔는 화장실에 없어.",
      eng: "He isn't in the bathroom.",
    },
    {
      kor: "걔 화장실에 있지 않아?",
      eng: "Isn't he in the bathroom?",
    },
  ],
  [
    {
      kor: "주차장은 이 건물 뒤에 있어.",
      eng: "The parking lot is behind this building.",
    },
    {
      kor: "주차장은 이 건물 뒤에 있어?",
      eng: "Is the parking lot behind this building?",
    },
    {
      kor: "주차장은 이 건물 뒤에 있지 않아.",
      eng: "The parking lot isn't behind this building.",
    },
    {
      kor: "주차장은 이 건물 뒤에 있지 않아?",
      eng: "Isn't the parking lot behind this building?",
    },
  ],
  [
    {
      kor: "내 자리는 네 자리 옆이야.",
      eng: "My seat is next to yours.",
    },
    {
      kor: "네 자리는 내 자리 옆이야?",
      eng: "Is your seat next to mine?",
    },
    {
      kor: "내 자리는 네 자리 옆이 아니야.",
      eng: "My seat isn't next to yours.",
    },
    {
      kor: "네 자리는 내 자리 옆이 아니야?",
      eng: "Isn't your seat next to mine?",
    },
  ],
  [
    {
      kor: "시간표는 벽에 붙어 있어요.",
      eng: "The schedule is on the wall.",
    },
    {
      kor: "시간표는 벽에 붙어 있나요?",
      eng: "Is the schedule on the wall?",
    },
    {
      kor: "시간표는 벽에 붙어 있지 않아요.",
      eng: "The schedule isn't on the wall.",
    },
    {
      kor: "시간표는 벽에 붙어 있지 않나요?",
      eng: "Isn't the schedule on the wall?",
    },
  ],
  [
    {
      kor: "우리 약속은 10시야.",
      eng: "Our engagement is at 10.",
    },
    {
      kor: "우리 약속은 10시야?",
      eng: "Is our engagement at 10?",
    },
    {
      kor: "우리 약속은 10시가 아니야.",
      eng: "Our engagement isn't at 10.",
    },
    {
      kor: "우리의 약속은 10시 아니야?",
      eng: "Isn't our engagement at 10?",
    },
  ],
  [
    {
      kor: "걔(남자) 생일은 5월에 있어.",
      eng: "His birthday is in May",
    },
    {
      kor: "걔 생일은 5월에 있어?",
      eng: "Is his birthday in May?",
    },
    {
      kor: "걔 생일은 5월이 아니야.",
      eng: "His birthday isn't in May",
    },
    {
      kor: "걔 생일은 5월이 아니야?",
      eng: "Isn't his birthday in May?",
    },
  ],
  [
    {
      kor: "MT는 금요일이야.",
      eng: "The retreat is on Friday.",
    },
    {
      kor: "MT는 금요일이야?",
      eng: "Is the retreat on Friday?",
    },
    {
      kor: "MT는 금요일이 아니야.",
      eng: "The retreat isn't on Friday.",
    },
    {
      kor: "MT는 금요일 아니야?",
      eng: "Isn't the retreat on Friday?",
    },
  ],
  [
    {
      kor: "난 우리 조원들하고 같이 있어.",
      eng: "I'm with my group members.",
    },
    {
      kor: "넌 너의 조원들하고 같이 있어?",
      eng: "Are you with your group members?",
    },
    {
      kor: "난 우리 조원들하고 같이 있지 않아.",
      eng: "I'm not with my group members.",
    },
    {
      kor: "넌 너의 조원들하고 같이 있지 않아?",
      eng: "Aren't you with your group members?",
    },
  ],
  [
    {
      kor: "음성자료(복수)는 인터넷에 있어.",
      eng: "The sound files are on the internet.",
    },
    {
      kor: "음성자료는 인터넷에 있어?",
      eng: "Are the sound files on the internet?",
    },
    {
      kor: "음성자료는 인터넷에 있지 않아.",
      eng: "The sound files aren't on the internet.",
    },
    {
      kor: "음성자료는 인터넷에 있지 않아?",
      eng: "Aren't the sound files on the internet?",
    },
  ],
  [
    {
      kor: "저 식당은 강남에 있어.",
      eng: "That restaurant is in Gangnam.",
    },
    {
      kor: "저 식당은 강남에 있어?",
      eng: "Is that restaurant in Gangnam?",
    },
    {
      kor: "저 식당은 강남에 없어.",
      eng: "That restaurant isn't in Gangnam.",
    },
    {
      kor: "저 식당은 강남에 있지 않아?",
      eng: "Isn't that restaurant in Gangnam?",
    },
  ]
];

const day6 = [
  [
    {
      kor: "냉장고에 많은 음식이 있어.",
      eng: "There is a lot of food in the fridge.",
    },
    {
      kor: "냉장고에 음식이 많이 있어?",
      eng: "Is there much food in the fridge?",
    },
    {
      kor: "냉장고에 음식이 많이 없어.",
      eng: "There isn't much food in the fridge.",
    },
    {
      kor: "냉장고에 음식이 많이 없어?",
      eng: "Isn't there much food in the fridge?",
    },
  ],
  [
    {
      kor: "금요일에 시험이 있어.",
      eng: "There is a test on Friday.",
    },
    {
      kor: "금요일에 시험 있어?",
      eng: "Is there a test on Friday?",
    },
    {
      kor: "금요일에 시험 없어.",
      eng: "There isn't a test on Friday.",
    },
    {
      kor: "금요일에 시험 있지 않아?",
      eng: "Isn't there a test on Friday?",
    },
  ],
  [
    {
      kor: "너 얼굴에 뭐 묻었어.",
      eng: "There is something on your face.",
    },
    {
      kor: "내 얼굴에 뭐 묻었어?",
      eng: "Is there something on my face?",
    },
    {
      kor: "너 얼굴에 뭐 안 묻었어.",
      eng: "There isn't something on your face.",
    },
    {
      kor: "내 얼굴에 뭐 묻지 않았어?",
      eng: "Isn't there something on my face?",
    },
  ],
  [
    {
      kor: "내 양말에 구멍 났어.",
      eng: "There is a hole in my sock.",
    },
    {
      kor: "너 양말에 구멍 났어?",
      eng: "Is there a hole in your sock?",
    },
    {
      kor: "내 양말은 구멍 안 났어.",
      eng: "There isn't a hole in my sock.",
    },
    {
      kor: "너 양말에 구멍 안 났어?",
      eng: "Isn't there a hole in your sock?",
    },
  ],
  [
    {
      kor: "밥솥에 밥 있어.",
      eng: "There is rice in the rice cooker.",
    },
    {
      kor: "밥솥에 밥 있어?",
      eng: "Is there rice in the rice cooker?",
    },
    {
      kor: "밥솥에 밥 없어.",
      eng: "There isn't rice in the rice cooker.",
    },
    {
      kor: "밥솥에 밥 있지 않아?",
      eng: "Isn't there rice in the rice cooker?",
    },
  ],
  [
    {
      kor: "책상 뒤에 콘센트가 있어.",
      eng: "There is an outlet behind the desk.",
    },
    {
      kor: "책상 뒤에 콘센트 있어?",
      eng: "Is there an outlet behind the desk?",
    },
    {
      kor: "책상 뒤에 콘센트 없어.",
      eng: "There isn't an outlet behind the desk.",
    },
    {
      kor: "책상 뒤에 콘센트 있지 않아?",
      eng: "Isn't there an outlet behind the desk?",
    },
  ],
  [
    {
      kor: "지갑에 신분증이 있어.",
      eng: "There is an I.D. in the wallet.",
    },
    {
      kor: "지갑에 신분증 있어?",
      eng: "Is there an I.D. in the wallet?",
    },
    {
      kor: "지갑에 신분증이 없어.",
      eng: "There isn't an I.D. in the wallet.",
    },
    {
      kor: "지갑에 신분증이 있지 않아?",
      eng: "Isn't there an I.D. in the wallet?",
    },
  ],
  [
    {
      kor: "이 요리에는 땅콩(성분)이 들어있어.",
      eng: "There is peanut in this dish.",
    },
    {
      kor: "이 요리에는 땅콩이 들어있어?",
      eng: "Is there peanut in this dish?",
    },
    {
      kor: "이 요리에는 땅콩이 들어있지 않아.",
      eng: "There isn't peanut in this dish.",
    },
    {
      kor: "이 요리에는 땅콩이 들어있지 않아?",
      eng: "Isn't there peanut in this dish?",
    },
  ],
  [
    {
      kor: "우리 집 근처에 약국이 있어.",
      eng: "There is a drug store near my house.",
    },
    {
      kor: "너희 집 근처에 약국이 있어?",
      eng: "Is there a drug store near your house?",
    },
    {
      kor: "우리 집 근처에는 약국이 없어.",
      eng: "There isn't a drug store near my house.",
    },
    {
      kor: "너희 집 근처에는 약국이 있지 않아?",
      eng: "Isn't there a drug store near your house?",
    },
  ],
  [
    {
      kor: "문 밖에 누군가 있어.",
      eng: "There is someone at the door.",
    },
    {
      kor: "문 밖에 누군가 있어?",
      eng: "Is there someone at the door?",
    },
    {
      kor: "문 밖에는 아무도 없어.",
      eng: "There isn't someone at the door.",
    },
    {
      kor: "문 밖에 누군가 있지 않아?",
      eng: "Isn't there someone at the door?",
    },
  ],
  [
    {
      kor: "거기 차 많이 막혀.",
      eng: "There is  a lot of traffic there.",
    },
    {
      kor: "거기 차 많이 막혀?",
      eng: "Is there much traffic there?",
    },
    {
      kor: "거기 차 막히지 않아.",
      eng: "There isn't much traffic there.",
    },
    {
      kor: "거기 차 막히지 않아?",
      eng: "Isn't there much traffic there?",
    },
  ],
  [
    {
      kor: "이 거리에는 카페가 많아.",
      eng: "There are a lot of coffee shops on this street.",
    },
    {
      kor: "이 거리에는 카페가 많아?",
      eng: "Are there many coffee shops on this street?",
    },
    {
      kor: "이 거리에는 카페가 많지 않아.",
      eng: "There aren't many coffee shops on this street.",
    },
    {
      kor: "이 거리에는 카페가 많지 않아?",
      eng: "Aren't there many coffee shops on this street?",
    },
  ],
  [
    {
      kor: "이 층에는 화장실이 두 개가 있어.",
      eng: "There are 2 restrooms on this floor.",
    },
    {
      kor: "이 층에는 화장실이 두 개 있어?",
      eng: "Are there 2 restrooms on this floor?",
    },
    {
      kor: "이 층에는 화장실이 두 개가 아니야.",
      eng: "There aren't 2 restrooms on this floor.",
    },
    {
      kor: "이 층에는 화장실이 두 개가 아니야?",
      eng: "Aren't there 2 restrooms on this floor? ",
    },
  ],
  [
    {
      kor: "내 컴퓨터에 영화(복수) 많아.",
      eng: "There are a lot of movies on my computer.",
    },
    {
      kor: "너의 컴퓨터에는 영화가 많아?",
      eng: "Are there many movies on your computer?",
    },
    {
      kor: "내 컴퓨터에는 영화가 많지 않아.",
      eng: "There aren't many movies on my computer.",
    },
    {
      kor: "너의 컴퓨터에는 영화가 많지 않아?",
      eng: "Aren't there many movies on your computer?",
    },
  ],
  [
    {
      kor: "스터디 홀에 학생들이 많아.",
      eng: "There are a lot of students in the study hall.",
    },
    {
      kor: "스터디 홀에는 학생들이 많아?",
      eng: "Are there many students in the study hall?",
    },
    {
      kor: "스터디 홀에는 학생들이 많지 않아.",
      eng: "There aren't many students in the study hall.",
    },
    {
      kor: "스터디 홀에는 학생들이 많지 않아?",
      eng: "Aren't there many students in the study hall?",
    },
  ],
  [
    {
      kor: "우리 가족은 5명이야.",
      eng: "There are 5 people in my family.",
    },
    {
      kor: "너의 가족은 5명이야?",
      eng: "Are there 5 people in your family?",
    },
    {
      kor: "우리 가족은 5명이 아니야.",
      eng: "There aren't 5 people in my family.",
    },
    {
      kor: "너의 가족은 5명이 아니야?",
      eng: "Aren't there 5 people in your family?",
    },
  ]
  
];

const day7 = [
  [
    {
      kor: "나는 8시에 PSE에 와.",
      eng: "I come to PSE at 8.",
    },
    {
      kor: "너는 8시에 PSE에 와?",
      eng: "Do you come to PSE at 8?",
    },
    {
      kor: "나는 8시에 PSE에 오지 않아.",
      eng: "I don't come to PSE at 8.",
    },
    {
      kor: "너는 8시에 PSE에 오지 않아?",
      eng: "Don't you come to PSE at 8?",
    },
  ],
  [
    {
      kor: "나는 9시부터 5시까지 일해.",
      eng: "I work from 9 to 5.",
    },
    {
      kor: "너는 9시부터 5시까지 일해?",
      eng: "Do you work from 9 to 5?",
    },
    {
      kor: "나는 9시부터 5시까지 일하지 않아.",
      eng: "I don't work from 9 to 5.",
    },
    {
      kor: "너는 9시부터 5시까지 일하지 않아?",
      eng: "Don't you work from 9 to 5?",
    },
  ],
  [
    {
      kor: "나는 주말에 쉬어.",
      eng: "I relax on the weekend.",
    },
    {
      kor: "너는 주말에 쉬어?",
      eng: "Do you relax on the weekend?",
    },
    {
      kor: "나는 주말에 쉬지 않아.",
      eng: "I don't relax on the weekend.",
    },
    {
      kor: "너는 주말에 쉬지 않아?",
      eng: "Don't you relax on the weekend?",
    },
  ],
  [
    {
      kor: "나는 버스에서 음악을 들어.",
      eng: "I listen to music on the bus.",
    },
    {
      kor: "너는 버스에서 음악을 들어?",
      eng: "Do you listen to music on the bus?",
    },
    {
      kor: "나는 버스에서 음악을 듣지 않아.",
      eng: "I don't listen to music on the bus.",
    },
    {
      kor: "너는 버스에서 음악을 듣지 않아?",
      eng: "Don't you listen to music on the bus?",
    },
  ],
  [
    {
      kor: "나는 시간 있을 때 독서 해.",
      eng: "I read in my free time.",
    },
    {
      kor: "너는 시간이 있을 때 독서 해?",
      eng: "Do you read in my free time?",
    },
    {
      kor: "나는 시간이 있을 때 독서 하지 않아.",
      eng: "I don't read in my free time.",
    },
    {
      kor: "너는 시간이 있을 때 독서 하지 않아?",
      eng: "Don't you read in my free time",
    },
  ],
  [
    {
      kor: "Steve는 여기 7시 정각에 도착해",
      eng: "Steve gets here at 7:00.",
    },
    {
      kor: "Steve는 여기 7시 정각에 도착해?",
      eng: "Does Steve get here at 7:00?",
    },
    {
      kor: "Steve는 여기 7시 정각에 도착하지 않아.",
      eng: "Steve doesn't get here at 7:00.",
    },
    {
      kor: "Steve는 여기 7시 정각에 도착하지 않아?",
      eng: "Doesn't Steve get here at 7:00?",
    },
  ],
  [
    {
      kor: "Chris는 원룸에 살아.",
      eng: "Chris lives in a studio.",
    },
    {
      kor: "Chris는 원룸에 살아?",
      eng: "Does Chris live in a studio?",
    },
    {
      kor: "Chris는 원룸에 살지 않아.",
      eng: "Chris doesn't live in a studio.",
    },
    {
      kor: "Chris는 원룸에 살지 않아?",
      eng: "Doesn't Chris live in a studio?",
    },
  ],
  [
    {
      kor: "Steve는 매년(해마다) 비행기타고 미국에 가.",
      eng: "Steve flies to America every year.",
    },
    {
      kor: "Steve는 매년 비행기타고 미국에 가?",
      eng: "Does Steve fly to America every year?",
    },
    {
      kor: "Steve는 매년 비행기타고 미국에 가지 않아.",
      eng: "Steve doesn't fly to America every year.",
    },
    {
      kor: "Steve는 매년 비행기타고 미국에 가지 않아?",
      eng: "Doesn't Steve fly to America every year?",
    },
  ],
  [
    {
      kor: "나는 주말에는 정오에 일어나.",
      eng: "I wake up at noon on the weekend.",
    },
    {
      kor: "너는 주말에는 정오에 일어나?",
      eng: "Do you wake up at noon on the weekend?",
    },
    {
      kor: "나는 주말에는 정오에 일어나지 않아.",
      eng: "I don't wake up at noon on the weekend.",
    },
    {
      kor: "너는 주말에는 정오에 일어나지 않아?",
      eng: "Don't you wake up at noon on the weekend?",
    },
  ],
  [
    {
      kor: "걔(남자)는 앞쪽에 앉아.",
      eng: "He sits in the front.",
    },
    {
      kor: "걔는 앞쪽에 앉아?",
      eng: "Does he sit in the front?",
    },
    {
      kor: "걔는 앞쪽에 앉지 않아.",
      eng: "He doesn't sit in the front.",
    },
    {
      kor: "걔는 앞쪽에 앉지 않아?",
      eng: "Doesn't he sit in the front?",
    },
  ],
  [
    {
      kor: "그 영화는 10시에 시작해.",
      eng: "The movie starts at 10.",
    },
    {
      kor: "그 영화는 10시에 시작해?",
      eng: "Does the movie start at 10?",
    },
    {
      kor: "그 영화는 10시에 시작하지 않아.",
      eng: "The movie doesn't start at 10.",
    },
    {
      kor: "그 영화는 10시에 시작하지 않아?",
      eng: "Doesn't the movie start at 10?",
    },
  ],
  [
    {
      kor: "걔들은 겨울에 보드 타.",
      eng: "They snowboard in the winter.",
    },
    {
      kor: "걔들은 겨울에 보드 타?",
      eng: "Do they snowboard in the winter?",
    },
    {
      kor: "걔들은 겨울에 보드 타지 않아.",
      eng: "They don't snowboard in the winter.",
    },
    {
      kor: "걔들은 겨울에 보드 타지 않아?",
      eng: "Don't they snowboard in the winter?",
    },
  ],
  [
    {
      kor: "걔네들은 걸어서 학교가.",
      eng: "They walk to school.",
    },
    {
      kor: "걔네들은 걸어서 학교가?",
      eng: "Do they walk to school?",
    },
    {
      kor: "걔네들은 걸어서 학교가지 않아.",
      eng: "They don't walk to school.",
    },
    {
      kor: "걔네들은 걸어서 학교가지 않아?",
      eng: "Don't they walk to school?",
    },
  ],
  [
    {
      kor: "내 친구들이랑 나는 금요일마다 술을 마셔.",
      eng: "My friends and I drink every Friday.",
    },
    {
      kor: "너는 너의 친구들이랑 금요일마다 술을 마셔?",
      eng: "Do you and your friends drink every Friday?",
    },
    {
      kor: "내 친구들이랑 나는 금요일마다 술을 마시지 않아.",
      eng: "My friends and I don't drink every Friday.",
    },
    {
      kor: "너는 너의 친구들이랑 금요일마다 술을 마시지 않아?",
      eng: "Don't you and your friends drink every Friday?",
    },
  ],
  [
    {
      kor: "그 학생들은 선생님께 수업 후에 말을 걸어.",
      eng: "The students talk to the teacher after class.",
    },
    {
      kor: "그 학생들은 선생님께 수업 후에 말을 걸어?",
      eng: "Do the students talk to the teacher after class?",
    },
    {
      kor: "그 학생들은 선생님께 수업 후에 말을 걸지 않아.",
      eng: "The students don't talk to the teacher after class.",
    },
    {
      kor: "그 학생들은 선생님께 수업 후에 말을 걸지 않아?",
      eng: "Don't the students talk to the teacher after class?",
    },
  ],
  [
    {
      kor: "Delta들은 3층에서 공부해.",
      eng: "The Deltas study on the 3rd floor.",
    },
    {
      kor: "Delta들은 3층에서 공부해?",
      eng: "Do the Deltas study on the 3rd floor?",
    },
    {
      kor: "Delta들은 3층에서 공부하지 않아.",
      eng: "The Deltas don't study on the 3rd floor.",
    },
    {
      kor: "Delta들은 3층에서 공부하지 않아?",
      eng: "Don't the Deltas study on the 3rd floor?",
    },
  ]
];

const day8 = [
  [
    {
      kor: "나는 주말에 TV봐.",
      eng: "I watch TV on the weekend.",
    },
    {
      kor: "너는 주말에 TV봐?",
      eng: "Do you watch TV on the weekend?",
    },
    {
      kor: "나는 주말에 TV안 봐.",
      eng: "I don't watch TV on the weekend.",
    },
    {
      kor: "나는 주말에 TV안 봐?",
      eng: "Don't you watch TV on the weekend?",
    },
  ],
  [
    {
      kor: "난 내 친구들을 강남에서 만나.",
      eng: "I meet my friends in Gangnam.",
    },
    {
      kor: "넌 너의 친구들을 강남에서 만나?",
      eng: "Do you meet your friends in Gangnam?",
    },
    {
      kor: "난 내 친구들을 강남에서 만나지 않아.",
      eng: "I don't meet my friends in Gangnam.",
    },
    {
      kor: "넌 너의 친구들을 강남에서 만나지 않아?",
      eng: "Don't you meet your friends in Gangnam?",
    },
  ],
  [
    {
      kor: "나는 SUV를 몰아.",
      eng: "I drive an SUV.",
    },
    {
      kor: "너는 SUV를 몰아?",
      eng: "Do you drive an SUV?",
    },
    {
      kor: "나는 SUV를 안 몰아.",
      eng: "I don't drive an SUV.",
    },
    {
      kor: "나는 SUV를 안 몰아?",
      eng: "Don't you drive an SUV?",
    },
  ],
  [
    {
      kor: "나는 내 친구들하고 영어로 말해.",
      eng: "I speak English with my friends.",
    },
    {
      kor: "너는 너의 친구들하고 영어로 말해?",
      eng: "Do you speak English with your friends?",
    },
    {
      kor: "나는 내 친구들하고 영어로 말하지 않아.",
      eng: "I don't speak English with my friends.",
    },
    {
      kor: "너는 너의 친구들하고 영어로 말하지 않아?",
      eng: "Don't you speak English with your friends?",
    },
  ],
  [
    {
      kor: "우리는 수업 후에 점심 먹어.",
      eng: "We have lunch after class.",
    },
    {
      kor: "우리 수업 후에 점심 먹어?",
      eng: "Do we have lunch after class?",
    },
    {
      kor: "우리는 수업 후에 점심 먹지 않아.",
      eng: "We don't  have lunch after class.",
    },
    {
      kor: "우리 수업 후에 점심 먹지 않아?",
      eng: "Don't we have lunch after class?",
    },
  ],
  [
    {
      kor: "Robin은 Steve 수업 전에 문법을 설명해.",
      eng: "Robin explains the grammar before Steve's class.",
    },
    {
      kor: "Robin은 Steve 수업 전에 문법을 설명해?",
      eng: "Does Robin explain the grammar before Steve's class?",
    },
    {
      kor: "Robin은 Steve 수업 전에 문법을 설명하지 않아.",
      eng: "Robin doesn't explain the grammar before Steve's class.",
    },
    {
      kor: "Robin은 Steve 수업 전에 문법을 설명하지 않아?",
      eng: "Doesn't Robin explain the grammar before Steve's class?",
    },
  ],
  [
    {
      kor: "걔(남자)는 식사 후에 비타민(복수)을 먹어.",
      eng: "He takes vitamins after meals.",
    },
    {
      kor: "걔는 식사 후에 비타민을 먹어?",
      eng: "Does he take vitamins after meals?",
    },
    {
      kor: "걔는 식사 후에 비타민을 먹지 않아.",
      eng: "He don't take vitamins after meals.",
    },
    {
      kor: "걔는 식사 후에 비타민을 먹지 않아?",
      eng: "Doesn't he take vitamins after meals?",
    },
  ],
  [
    {
      kor: "Steve는 아침에 커피를 마셔.",
      eng: "Steve drinks coffee in the morning.",
    },
    {
      kor: "Steve는 아침에 커피를 마셔?",
      eng: "Does Steve drink coffee in the morning?",
    },
    {
      kor: "Steve는 아침에 커피를 마시지 않아.",
      eng: "Steve doesn't  drinks coffee in the morning.",
    },
    {
      kor: "Steve는 아침에 커피를 마시지 않아?",
      eng: "Doesn't Steve drink coffee in the morning?",
    },
  ],
  [
    {
      kor: "걔(여자)는 자기 옷을 백화점에서 사.",
      eng: "She buys her clothes at the department store.",
    },
    {
      kor: "걔는 자기 옷을 백화점에서 사?",
      eng: "Does she buy her clothes at the department store?",
    },
    {
      kor: "걔는 자기 옷을 백화점에서 사지 않아.",
      eng: "She doesn't buy her clothes at the department store.",
    },
    {
      kor: "걔는 자기 옷을 백화점에서 사지 않아?",
      eng: "Doesn't she buy her clothes at the department store?",
    },
  ],
  [
    {
      kor: "CV들은 수업 전에 출석을 불러.",
      eng: "The CVs call roll before class.",
    },
    {
      kor: "CV들은 수업 전에 출석을 불러?",
      eng: "Do the CVs call roll before class?",
    },
    {
      kor: "CV들은 수업 전에 출석을 부르지 않아.",
      eng: "The CVs don't call roll before class.",
    },
    {
      kor: "CV들은 수업 전에 출석을 부르지 않아?",
      eng: "Don't the CVs call roll before class?",
    },
  ],
  [
    {
      kor: "거긴 일본 음식을 팔아.",
      eng: "They serve Japanese food.",
    },
    {
      kor: "거긴 일본 음식을 팔아?",
      eng: "Do they serve Japanese food?",
    },
    {
      kor: "거긴 일본 음식을 팔지 않아.",
      eng: "They don't serve Japanese food.",
    },
    {
      kor: "거긴 일본 음식을 팔지 않아?",
      eng: "Don't they serve Japanese food?",
    },
  ],
  [
    {
      kor: "그 학생들은 매일 대중교통을 이용해.",
      eng: "The students use public transportation every day.",
    },
    {
      kor: "그 학생들은 매일 대중교통을 이용해?",
      eng: "Do the students use public transportation every day?",
    },
    {
      kor: "그 학생들은 매일 대중교통을 이용하지 않아.",
      eng: "The students don't use public transportation every day.",
    },
    {
      kor: "그 학생들은 매일 대중교통을 이용하지 않아?",
      eng: "Don't the students use public transportation every day?",
    },
  ],
  [
    {
      kor: "걔들은 Study hall에서 문장들을 반복해.",
      eng: "They repeat the sentences in the study hall.",
    },
    {
      kor: "걔들은 Study hall에서 문장들을 반복해?",
      eng: "Do they repeat the sentences in the study hall?",
    },
    {
      kor: "걔들은 Study hall에서 문장들을 반복하지 않아.",
      eng: "They don't repeat the sentences in the study hall.",
    },
    {
      kor: "걔들은 Study hall에서 문장들을 반복하지 않아?",
      eng: "Don't they repeat the sentences in the study hall?",
    },
  ],
  [
    {
      kor: "걔들은 주말에 자기 빨래를 해.",
      eng: "They do their laundry on the weekend.",
    },
    {
      kor: "걔들은 주말에 자기 빨래를 해?",
      eng: "Do they do their laundry on the weekend?",
    },
    {
      kor: "걔들은 주말에 자기 빨래를 하지 않아.",
      eng: "They don't do their laundry on the weekend.",
    },
    {
      kor: "걔들은 주말에 자기 빨래를 하지 않아?",
      eng: "Don't they do their laundry on the weekend?",
    },
  ],
  [
    {
      kor: "나는 시간 있을 때 video game(복수)을 해.",
      eng: "I play video games in my free time.",
    },
    {
      kor: "너는 시간 있을 때 video game을 해?",
      eng: "Do you play video games in my free time?",
    },
    {
      kor: "너는 시간 있을 때 video game을 하지 않아.",
      eng: "I don't play video games in my free time.",
    },
    {
      kor: "너는 시간 있을 때 video game을 하지 않아?",
      eng: "Don't you play video games in my free time?",
    },
  ],
  [
    {
      kor: "나는 밤에 내 핸드폰을 충전해.",
      eng: "I charge my phone at night.",
    },
    {
      kor: "너는 밤에 내 핸드폰을 충전해?",
      eng: "Do you charge my phone at night?",
    },
    {
      kor: "나는 밤에 내 핸드폰을 충전하지 않아.",
      eng: "I don't charge my phone at night.",
    },
    {
      kor: "너는 밤에 내 핸드폰을 충전하지 않아?",
      eng: "Don't you charge my phone at night?",
    },
  ]
];
const DeltaData = [day3, day4, day5, day6, day7, day8];

export default DeltaData;
