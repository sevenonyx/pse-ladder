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
      eng: "This my  sister.",
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

const DeltaData = [day3, day4];

export default DeltaData;
