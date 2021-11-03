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
      kor: "저건 걔들 선물(복수) 아니야?",
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

const DeltaData = [day3];

export default DeltaData;
