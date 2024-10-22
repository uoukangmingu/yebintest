// 문제 데이터
const multipleChoiceQuestions = [
  { question: "경쟁의 주된 원인은 무엇인가?", choices: ["A) 기술 혁신", "B) 대체성", "C) 시장 성장률", "D) 가격 인하"], answer: 1 },
  { question: "산업을 구분하는 주요 기준은 무엇인가?", choices: ["A) 소비자의 위치", "B) 제품의 소재와 기술", "C) 유통 경로", "D) 가격"], answer: 1 },
  { question: "대체품의 위협을 줄이는 방법은 무엇인가?", choices: ["A) 가격을 낮춘다", "B) 기술을 혁신한다", "C) 제품의 차별화를 높인다", "D) 고객 만족도를 높인다"], answer: 2 },
  { question: "후발 주자의 진입을 막는 주요 장벽은 무엇인가?", choices: ["A) 규모의 경제", "B) 낮은 가격", "C) 빠른 시장 성장", "D) 다양한 제품 라인"], answer: 0 },
  { question: "후방 통합에 해당하는 전략은 무엇인가?", choices: ["A) 유통 업체를 통제", "B) 소비자와의 관계를 강화", "C) 공급자와의 관계를 강화", "D) 경쟁사와 협력"], answer: 2 },
  { question: "성숙기 단계에서 주로 사용되는 전략은 무엇인가?", choices: ["A) 시장 점유율 확대", "B) 고가 전략", "C) 제품 차별화", "D) 비용 절감"], answer: 3 },
  { question: "제품 수명 주기 중 성장기에 가장 중요한 것은 무엇인가?", choices: ["A) 브랜드 확장", "B) 가격 인상", "C) 원가 절감", "D) 유통 전략"], answer: 3 },
  { question: "경쟁사의 전략을 분석하는 이유는 무엇인가?", choices: ["A) 새로운 제품을 개발하기 위해", "B) 경쟁사의 약점을 찾아내기 위해", "C) 시장을 독점하기 위해", "D) 가격을 낮추기 위해"], answer: 1 },
  { question: "SWOT 분석에서 내부 요인에 해당하는 것은 무엇인가?", choices: ["A) 기회와 위협", "B) 강점과 약점", "C) 경쟁사의 전략", "D) 소비자의 요구"], answer: 1 },
  { question: "시장지향성 전략의 주요 요소는 무엇인가?", choices: ["A) 시장 정보를 전파하고 반응하는 활동", "B) 비용을 절감하는 활동", "C) 기술 혁신", "D) 시장 점유율 확대"], answer: 0 },
  { question: "도입기 단계에서 가장 중요한 것은 무엇인가?", choices: ["A) 가격 인하", "B) 브랜드 인식", "C) 원가 우위", "D) 유통 경로 확장"], answer: 1 },
  { question: "차별화 전략의 주요 목적은 무엇인가?", choices: ["A) 가격 경쟁에 집중", "B) 제품의 독특한 특성을 강조", "C) 원가 우위를 달성", "D) 유통 경로를 확장"], answer: 1 },
  { question: "BCG 매트릭스에서 '문제아' 제품에 적합한 전략은 무엇인가?", choices: ["A) 유지 전략", "B) 철수 전략", "C) 성장 전략", "D) 축소 전략"], answer: 2 },
  { question: "후발 주자의 진입 위협을 낮추기 위한 방법은 무엇인가?", choices: ["A) 진입 장벽을 높인다", "B) 가격을 낮춘다", "C) 제품을 단순화한다", "D) 경쟁사의 전략을 모니터링한다"], answer: 0 },
  { question: "고객 지향 마케팅은 주로 무엇에 초점을 맞추나요?", choices: ["A) 대중시장", "B) 개별 소비자의 욕구", "C) 저가 전략", "D) 원가 절감"], answer: 1 },
  { question: "성장기 후반에 주로 발생하는 현상은 무엇인가?", choices: ["A) 제품군 확장", "B) 셰이크아웃", "C) 가격 인상", "D) 브랜드 재포지셔닝"], answer: 1 },
  { question: "기업의 장기적인 목표를 정의하는 것은 무엇인가?", choices: ["A) 기업 사명", "B) BCG 매트릭스", "C) SWOT 분석", "D) 시장 분석"], answer: 0 },
  { question: "후방 통합의 주요 이점은 무엇인가?", choices: ["A) 소비자 만족도 향상", "B) 공급 안정성 확보", "C) 브랜드 인지도 증가", "D) 시장 점유율 확대"], answer: 1 },
  { question: "시장 성숙기 단계의 주요 전략은 무엇인가?", choices: ["A) 시장 점유율 확대", "B) 비용 절감", "C) 원가 우위 확보", "D) 기술 혁신"], answer: 1 },
  { question: "BCG 매트릭스에서 '자금젖소'의 특징은 무엇인가?", choices: ["A) 시장 점유율이 낮고 성장률이 높음", "B) 시장 점유율이 높고 성장률이 낮음", "C) 시장 점유율이 낮고 성장률이 낮음", "D) 시장 점유율이 높고 성장률이 높음"], answer: 1 },
  { question: "경쟁사 분석에서 중요한 것은 무엇인가?", choices: ["A) 가격 책정 전략", "B) 고객과의 관계", "C) 제품 차별화", "D) 유통 경로"], answer: 2 },
  { question: "시장 분석에서 중요한 요소는 무엇인가?", choices: ["A) 기업의 강점", "B) 경쟁사의 약점", "C) 소비자의 욕구", "D) 생산 비용"], answer: 2 },
  { question: "성숙기 단계에서 가장 중요한 가격 전략은 무엇인가?", choices: ["A) 저가 전략", "B) 원가 우위 전략", "C) 촉진 전략과 보완적 가격 전략", "D) 프리미엄 가격 전략"], answer: 2 },
  { question: "기업의 시장 철수를 결정할 때 고려하는 주요 요인은 무엇인가?", choices: ["A) 원가 우위", "B) 수익성", "C) 제품 차별화", "D) 브랜드 인지도"], answer: 1 },
  { question: "경쟁우위를 창출하기 위한 기업 내부 분석은 무엇인가?", choices: ["A) 시장 분석", "B) 제품 분석", "C) SWOT 분석", "D) 경쟁우위 분석"], answer: 3 },
  { question: "후발 주자의 위협을 줄이는 주요 전략은 무엇인가?", choices: ["A) 진입 장벽을 낮춘다", "B) 경쟁사와 협력한다", "C) 진입 장벽을 높인다", "D) 제품을 단순화한다"], answer: 2 },
  { question: "기업이 다각화 전략을 사용할 때 고려하는 주요 요소는 무엇인가?", choices: ["A) 고객 만족도", "B) 브랜드 인지도", "C) 시장 적합성", "D) 가격 경쟁력"], answer: 2 },
  { question: "고객 자산을 분류할 때 고려하는 주요 요소는 무엇인가?", choices: ["A) 브랜드 인지도", "B) 원가 우위", "C) 가치 원동력", "D) 유통 경로"], answer: 2 },
  { question: "시장 성장률을 예측할 때 사용하는 방법 중 하나는 무엇인가?", choices: ["A) 시장 분석", "B) 확산 모형", "C) 제품 분석", "D) 경쟁사 분석"], answer: 1 },
  { question: "시장 침투 전략의 주요 목표는 무엇인가?", choices: ["A) 제품 차별화", "B) 시장 점유율 확대", "C) 원가 절감", "D) 유통 경로 확장"], answer: 1 },
  { question: "SWOT 분석에서 외부 요인에 해당하는 것은 무엇인가?", choices: ["A) 강점과 약점", "B) 기회와 위협", "C) 경쟁사의 전략", "D) 고객의 요구"], answer: 1 },
  { question: "BCG 매트릭스에서 '문제아'의 특징은 무엇인가?", choices: ["A) 시장 점유율이 높고 성장률이 낮음", "B) 시장 점유율이 낮고 성장률이 높음", "C) 시장 점유율이 낮고 성장률이 낮음", "D) 시장 점유율이 높고 성장률이 높음"], answer: 1 },
  { question: "성장기 단계에서 가장 중요한 전략 요소는 무엇인가?", choices: ["A) 브랜드 확장", "B) 유통 경로 확장", "C) 가격 인상", "D) 원가 절감"], answer: 1 },
  { question: "철수 전략의 주요 목적은 무엇인가?", choices: ["A) 시장 점유율 확대", "B) 비용 절감", "C) 수익성 저하를 방지", "D) 원가 우위 확보"], answer: 2 },
  { question: "경쟁 분석에서 주요한 대체 제품의 특징은 무엇인가?", choices: ["A) 가격과 효과의 상충 관계를 개선할 수 있는 제품", "B) 높은 가격 제품", "C) 저렴한 대체품", "D) 동일한 기술을 사용하는 제품"], answer: 0 },
  { question: "기업이 철수 전략을 사용할 때 고려해야 할 주요 요인은 무엇인가?", choices: ["A) 수익성", "B) 브랜드 확장", "C) 유통 경로", "D) 제품 차별화"], answer: 0 },
  { question: "경쟁우위를 유지하기 위한 주요 전략 요소는 무엇인가?", choices: ["A) 차별화", "B) 저가 전략", "C) 비용 절감", "D) 시장 점유율 확대"], answer: 0 },
  { question: "시장 철수를 결정할 때 주로 고려하는 것은 무엇인가?", choices: ["A) 가격 경쟁력", "B) 시장 점유율", "C) 수익성", "D) 브랜드 인지도"], answer: 2 },
  { question: "경쟁 분석에서 후발 주자의 위협을 낮추는 주요 전략은 무엇인가?", choices: ["A) 제품 차별화", "B) 진입 장벽 강화", "C) 비용 절감", "D) 브랜드 확장"], answer: 1 },
  { question: "시장 점유율을 확대하기 위한 전략적 단계는 무엇인가?", choices: ["A) 도입기", "B) 성장기", "C) 성숙기", "D) 쇠퇴기"], answer: 1 },
  { question: "고객의 브랜드 자산을 높이기 위한 주요 활동은 무엇인가?", choices: ["A) 리마인딩 마케팅", "B) 가격 인하", "C) 원가 우위 확보", "D) 유통 경로 확장"], answer: 0 },
  { question: "성장기 후반에 주로 사용되는 전략은 무엇인가?", choices: ["A) 가격 인상", "B) 셰이크아웃", "C) 브랜드 확장", "D) 촉진 전략"], answer: 1 },
  { question: "기업의 장기적인 목표를 설정하는 것은 무엇인가?", choices: ["A) 시장 분석", "B) 경쟁우위 분석", "C) 기업 사명", "D) SWOT 분석"], answer: 2 },
  { question: "시장 성장률 예측을 위한 주요 방법은 무엇인가?", choices: ["A) 확산 모형", "B) 파생 수요 분석", "C) 경쟁사 분석", "D) 제품 차별화"], answer: 1 },
  { question: "성숙기 단계에서 사용되는 주요 가격 전략은 무엇인가?", choices: ["A) 촉진 전략과 보완적 가격 전략", "B) 고가 전략", "C) 가격 인상", "D) 프리미엄 가격 전략"], answer: 0 },
  { question: "경쟁 첩보의 주요 목적은 무엇인가?", choices: ["A) 경쟁사의 약점을 찾는다", "B) 새로운 기회를 발굴한다", "C) 가격을 낮춘다", "D) 제품을 단순화한다"], answer: 1 },
  { question: "BCG 매트릭스에서 '개' 제품의 주요 전략은 무엇인가?", choices: ["A) 유지 전략", "B) 철수 전략", "C) 성장 전략", "D) 비용 절감 전략"], answer: 1 },
  { question: "고객 자산을 구축하는 주요 방법은 무엇인가?", choices: ["A) 브랜드 자산 강화", "B) 비용 절감", "C) 유통 경로 확장", "D) 시장 점유율 확대"], answer: 0 }
];



const oxQuestions = [
  { question: "경쟁의 주된 원인은 대체성이다.", answer: true },
  { question: "산업은 소비자의 여러 특징으로 구분된다.", answer: false },
  { question: "대체품의 위협은 경쟁 분석의 요소 중 하나이다.", answer: true },
  { question: "후발 주자의 진입을 막는 주요 장벽 중 하나는 규모의 경제이다.", answer: true },
  { question: "경쟁사의 제품이 차별화될수록 경쟁이 더 심해진다.", answer: false },
  { question: "성숙기 단계에서는 성장이 더 이상 없다.", answer: true },
  { question: "전략적 집단은 경쟁사들이 유사한 전략을 공유하는 것을 의미한다.", answer: true },
  { question: "후방 통합은 공급자를 통제하는 전략이다.", answer: true },
  { question: "수직적 통합의 장점 중 하나는 운영비 절감이다.", answer: true },
  { question: "가격 전략은 제품 수명 주기의 도입기에서 가장 중요하다.", answer: false },
  { question: "성장기 전략은 브랜드 선별적 수요를 증가시키는 것이다.", answer: true },
  { question: "셰이크아웃 단계는 성장기 후반에 일어난다.", answer: true },
  { question: "도입기 단계에서는 수익이 즉시 발생한다.", answer: false },
  { question: "시장지향성 전략은 시장 정보에 대한 조직 차원의 대응을 의미한다.", answer: true },
  { question: "자사 내부에서의 약점 분석은 SWOT 분석의 일부이다.", answer: true },
  { question: "외부 환경의 기회 요인은 SWOT 분석에서 강점에 해당한다.", answer: false },
  { question: "시장 점유율은 시장 매력 분석의 주요 요소 중 하나이다.", answer: true },
  { question: "BCG 매트릭스에서 '자금젖소'는 시장 점유율이 높은 제품을 의미한다.", answer: true },
  { question: "철수 전략은 BCG 매트릭스에서 '문제아' 제품에 적합하다.", answer: false },
  { question: "기업의 사명은 단기적 목표를 설정하는 데 중점을 둔다.", answer: false },
  { question: "PaaS는 플랫폼을 서비스 형태로 제공하는 것을 의미한다.", answer: true },
  { question: "시장 점유율을 확장하는 전략은 성숙기 단계에 적합하다.", answer: true },
  { question: "시장 내의 위협 요소는 SWOT 분석에서 외부 요인으로 분석된다.", answer: true },
  { question: "고객 분석은 고객의 현재 욕구와 잠재 욕구를 이해하는 데 중점을 둔다.", answer: true },
  { question: "시장 트렌드를 파악하는 것은 SWOT 분석에서 약점 분석에 해당한다.", answer: false },
  { question: "제품의 생애 주기 중 도입기는 브랜드 인식이 낮은 단계이다.", answer: true },
  { question: "후발 주자의 위협이 클수록 진입 장벽이 낮아진다.", answer: false },
  { question: "경쟁사에 대한 첩보는 전략적 경쟁 우위 확보에 기여할 수 있다.", answer: true },
  { question: "차별화 전략은 가격 경쟁을 강조한다.", answer: false },
  { question: "고정비용이 높을수록 철수 장벽이 낮아진다.", answer: false },
  { question: "후방 통합은 소비자와의 직접 관계를 구축하는 전략이다.", answer: false },
  { question: "신기술을 도입하면 대체품의 위협이 감소한다.", answer: true },
  { question: "기업의 전략은 환경 분석을 통해 설정된다.", answer: true },
  { question: "성장기 단계에서는 유통 전략이 핵심이다.", answer: true },
  { question: "시장 성장률이 저조할수록 산업 내 경쟁은 약해진다.", answer: false },
  { question: "고객 지향 마케팅은 개별 소비자의 욕구에 초점을 맞춘다.", answer: true },
  { question: "시장 진입 장벽이 높을수록 후발 주자의 진입 가능성은 낮아진다.", answer: true },
  { question: "온라인 비즈니스에서의 낮은 인지도는 기회 요인에 해당한다.", answer: false },
  { question: "전략적 상황 분석은 기업의 강점과 약점을 파악하는 데 도움이 된다.", answer: true },
  { question: "BCG 매트릭스에서 '문제아'는 시장 점유율이 낮고 성장률이 높은 제품이다.", answer: true },
  { question: "고객자산은 기업의 현재 가치를 나타낸다.", answer: true },
  { question: "시장 매력 분석은 주로 기업의 외부 요인을 다룬다.", answer: true },
  { question: "시장 진입 초기 단계에서 높은 가격 전략은 효과적이다.", answer: true },
  { question: "SWOT 분석은 간단한 도표로 전략을 도출할 수 있게 해준다.", answer: true },
  { question: "STP는 시장 세분화, 타겟 설정, 포지셔닝을 의미한다.", answer: true },
  { question: "시장 성장률은 시장 매력 분석에서 중요한 요소 중 하나이다.", answer: true },
  { question: "T/W 전략은 기업이 매우 불리한 상황에서 사용된다.", answer: true },
  { question: "성숙기 단계에서는 비용 절감이 중요한 전략이다.", answer: true },
  { question: "경쟁 분석에서 후발 주자의 위협은 낮을수록 좋다.", answer: true },
  { question: "제품 차별화가 클수록 가격 경쟁은 약해진다.", answer: true }
];


const subjectiveQuestions = [
  { question: "시장 분석에서 중요한 요소 중 하나로, 기업이 직면한 외부 요인은 무엇인가요?", answer: "기회와 위협" },
  { question: "성장기 단계에서 가장 중요한 전략 요소는 무엇인가요?", answer: "유통 전략" },
  { question: "후발 주자의 위협을 높이는 주요 진입 장벽은 무엇인가요?", answer: "규모의 경제" },
  { question: "제품 수명 주기에서 셰이크아웃 단계는 언제 발생하나요?", answer: "성장기 후반" },
  { question: "기업이 특정 시장에서 철수할 때 사용하는 전략은 무엇인가요?", answer: "철수 전략" },
  { question: "SWOT 분석에서 내부 요인은 무엇으로 구분되나요?", answer: "강점과 약점" },
  { question: "경쟁사 분석에서 중요한 요인 중 하나로, 경쟁사의 제품 차별화를 말하는 용어는 무엇인가요?", answer: "제품 차별화" },
  { question: "기업의 사명이 정의하는 것은 무엇인가요?", answer: "장기적 목표" },
  { question: "수직적 통합의 장점 중 하나는 무엇인가요?", answer: "운영비 절감" },
  { question: "성장기 후반에 제품군을 정리하는 전략적 단계는 무엇인가요?", answer: "셰이크아웃" },
  { question: "BCG 매트릭스에서 '자금젖소'의 전략은 무엇인가요?", answer: "유지 전략" },
  { question: "소비자의 동질성을 고려하여 시장을 구분하는 기준은 무엇인가요?", answer: "기술, 고객 용도, 고객 집단" },
  { question: "경쟁 우위를 확보하기 위한 분석 중 하나로, 기업 내부의 자산과 역량을 분석하는 것은 무엇인가요?", answer: "경쟁 우위 분석" },
  { question: "기업의 사명이 고객에게 제공해야 하는 것은 무엇인가요?", answer: "명확한 가치" },
  { question: "고객 분석에서 현재 욕구 외에 고려해야 하는 것은 무엇인가요?", answer: "잠재 욕구" },
  { question: "SWOT 분석에서 기업이 시장 기회를 활용하는 전략을 무엇이라 하나요?", answer: "O/S 전략" },
  { question: "후방 통합의 목적은 무엇인가요?", answer: "공급자 통제" },
  { question: "BCG 매트릭스에서 별 제품의 전략적 목표는 무엇인가요?", answer: "성장 전략" },
  { question: "성장률 예측을 위해 사용하는 방법 중 하나는 무엇인가요?", answer: "확산 모형" },
  { question: "철수 전략을 사용할 때 기업이 주로 고려하는 것은 무엇인가요?", answer: "수익성" },
  { question: "제품 개발 전략의 목표는 무엇인가요?", answer: "신제품 개발" },
  { question: "시장 매력 분석에서 평가하는 주요 요소는 무엇인가요?", answer: "시장 규모, 성장률, 수익성" },
  { question: "기업의 사명은 주로 무엇을 기반으로 정의되나요?", answer: "시장 지향성" },
  { question: "SWOT 분석에서 기회를 극대화하기 위한 전략은 무엇인가요?", answer: "O/S 전략" },
  { question: "경쟁사의 행동을 모니터링하는 경쟁 첩보의 유형은 무엇인가요?", answer: "방어적 첩보" },
  { question: "시장 침투 전략의 목표는 무엇인가요?", answer: "시장 점유율 확대" },
  { question: "기업이 다각화 전략을 사용할 때 고려해야 하는 주요 요소는 무엇인가요?", answer: "시장 적합성" },
  { question: "고객의 브랜드 자산을 높이기 위한 주요 활동은 무엇인가요?", answer: "브랜드 윤리 강화" },
  { question: "기업이 수직적 통합을 통해 얻을 수 있는 주요 이점은 무엇인가요?", answer: "공급 안정성 확보" },
  { question: "경쟁우위 창출을 위한 기업 내부 자산과 역량 분석을 무엇이라고 하나요?", answer: "경쟁 우위 분석" },
  { question: "시장 성장률 예측을 위해 인구분포 분석을 사용하는 방법은 무엇인가요?", answer: "파생 수요 분석" },
  { question: "제품 수명 주기에서 성숙기 이후의 단계는 무엇인가요?", answer: "쇠퇴기" },
  { question: "기업이 경쟁 우위를 유지하기 위한 주요 전략 요소는 무엇인가요?", answer: "차별화" },
  { question: "후발 주자의 위협을 낮추기 위한 주요 전략은 무엇인가요?", answer: "진입 장벽 강화" },
  { question: "고객의 브랜드 인식을 높이기 위한 마케팅 활동은 무엇인가요?", answer: "리마인딩 마케팅" },
  { question: "다각화 전략의 주요 목표는 무엇인가요?", answer: "성장 추구" },
  { question: "BCG 매트릭스에서 '개' 제품의 주요 전략은 무엇인가요?", answer: "철수 전략" },
  { question: "기업이 시장 철수를 결정하는 주요 요인은 무엇인가요?", answer: "수익성 저하" },
  { question: "기업의 목표를 달성하기 위한 장기적인 전략 계획을 무엇이라 하나요?", answer: "기업 전략" }
];

// 문제 리스트
// 문제 리스트
let allQuestions = [];
let wrongQuestions = [];
let userAnswers = [];
let currentQuestionIndex = 0;
let currentQuestionType = "";
let totalQuestions = 0;
let isRetryMode = false;

// 초성을 추출하는 함수
function extractInitials(text) {
    const INITIALS = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    let initials = "";

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const code = char.charCodeAt(0) - 44032;  // 한글 유니코드 값에서 시작값(가)을 뺌

        if (code >= 0 && code <= 11171) {
            const initialIndex = Math.floor(code / 588);
            initials += INITIALS[initialIndex];
        } else {
            initials += char;  // 한글이 아닌 문자 (띄어쓰기 등)는 그대로 추가
        }
    }

    return initials;
}



// 문제 배열들을 합치고 섞기 (객관식, OX, 주관식 랜덤 순서)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initializeQuiz() {
    // 모든 문제 배열을 결합하여 초기화
    allQuestions = [
        ...multipleChoiceQuestions.map(q => ({ ...q, type: "multiple" })),
        ...oxQuestions.map(q => ({ ...q, type: "ox" })),
        ...subjectiveQuestions.map(q => ({ ...q, type: "subjective" }))
    ];

    shuffleArray(allQuestions);  // 문제를 랜덤으로 섞음
    totalQuestions = allQuestions.length;  // 총 문제 수 설정
    currentQuestionIndex = 0;  // 첫 번째 문제로 초기화
    wrongQuestions = [];  // 틀린 문제 배열 초기화
    userAnswers = [];  // 사용자의 답변 기록 초기화
    
    updateProgress();
    displayQuestion();  // 첫 번째 문제 표시
}

// 문제를 화면에 표시
function displayQuestion() {
    const question = allQuestions[currentQuestionIndex];
    currentQuestionType = question.type;
    document.getElementById("question").innerText = question.question;

    if (currentQuestionType === "multiple") {
        displayMultipleChoice(question);
    } else if (currentQuestionType === "ox") {
        displayOXChoice();
    } else if (currentQuestionType === "subjective") {
        displaySubjectiveInput();
    }

    updateProgress();
}

// 객관식 문제 표시
function displayMultipleChoice(question) {
    const choicesBox = document.getElementById("choices-box");
    choicesBox.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.onclick = () => checkAnswer(index);
        choicesBox.appendChild(button);
    });
    document.getElementById("input-box").classList.add("hidden");
}

// OX 문제 표시
function displayOXChoice() {
    const choicesBox = document.getElementById("choices-box");
    choicesBox.innerHTML = `
        <button onclick="checkAnswer(true)">O</button>
        <button onclick="checkAnswer(false)">X</button>
    `;
    document.getElementById("input-box").classList.add("hidden");
}

// 주관식 문제 표시
function displaySubjectiveInput() {
    const inputBox = document.getElementById("input-box");
    inputBox.classList.remove("hidden");
    document.getElementById("choices-box").innerHTML = "";

    const hintButton = document.createElement("button");
    hintButton.innerText = "힌트 보기";
    hintButton.onclick = showHint;  // 힌트 버튼을 클릭했을 때 showHint 함수 실행
    document.getElementById("choices-box").appendChild(hintButton);
}

function showHint() {
    const question = allQuestions[currentQuestionIndex];
    const correctAnswer = question.answer;
    const initials = extractInitials(correctAnswer);
    alert(`힌트: ${initials}`);  // 힌트는 alert 창으로 표시되도록 함
}

// 정답 확인
function checkAnswer(selectedAnswer) {
    const question = allQuestions[currentQuestionIndex];
    let isCorrect = false;

    // 객관식 문제 정답 확인
    if (currentQuestionType === "multiple" && selectedAnswer === question.answer) {
        isCorrect = true;
    } 
    // OX 문제 정답 확인
    else if (currentQuestionType === "ox" && selectedAnswer === question.answer) {
        isCorrect = true;
    } 
    // 주관식 문제 정답 확인 (띄어쓰기 무시)
    else if (currentQuestionType === "subjective") {
        const userAnswerProcessed = selectedAnswer.replace(/\s+/g, '').toLowerCase();  // 사용자 답변에서 모든 공백 제거
        const correctAnswerProcessed = question.answer.replace(/\s+/g, '').toLowerCase();  // 정답에서도 모든 공백 제거
        if (userAnswerProcessed === correctAnswerProcessed) {
            isCorrect = true;
        }
    }

    // 사용자가 틀린 문제는 wrongQuestions 배열에 추가하고, 답을 기록
    userAnswers.push({
        question: question.question,
        correctAnswer: currentQuestionType === "multiple" ? question.choices[question.answer] : question.answer,
        userAnswer: selectedAnswer,
        isCorrect: isCorrect
    });

    if (!isCorrect) {
        wrongQuestions.push(question);
    }

    nextQuestion();
}


// 다음 문제로 넘어감
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= allQuestions.length) {
        showResult();  // 마지막 문제를 풀면 오답 노트 출력
    } else {
        displayQuestion();  // 다음 문제 표시
    }
}

function showResult() {
    // 모든 문제와 버튼 숨기기
    document.querySelector('.container').classList.add('hidden');
    
    // 오답 노트 표시
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
    
    if (wrongQuestions.length > 0) {
        // 오답이 있는 경우 오답 노트와 버튼을 표시
        document.getElementById("result-message").innerText = "오답 노트";
        displayWrongAnswers();  // 틀린 문제 목록을 표시
        document.getElementById("retry-wrong").classList.remove("hidden");
    } else {
        // 모든 문제를 맞춘 경우
        document.getElementById("result-message").innerText = "모두 정답입니다!";
        document.getElementById("retry-wrong").classList.add("hidden");
    }
    
    // resultBox 내의 기존 내용을 덮어쓰지 않고, 오답 노트만 추가
}
// 다시 시작하기 버튼 클릭 시 페이지 새로고침
document.getElementById("restart").onclick = function () {
    window.location.reload();  // 페이지를 새로고침하여 퀴즈를 처음부터 다시 시작
};


// 틀린 문제 다시 풀기
document.getElementById("retry-wrong").onclick = function () {
    if (wrongQuestions.length > 0) {
        allQuestions = [...wrongQuestions];  // 틀린 문제 배열로 allQuestions 재설정
        totalQuestions = wrongQuestions.length;  // 총 문제 수를 틀린 문제 수로 설정
        wrongQuestions = [];  // 틀린 문제 배열 초기화
        currentQuestionIndex = 0;  // 첫 번째 문제로 초기화
        userAnswers = [];  // 사용자의 답변 기록 초기화
        document.getElementById("result-box").classList.add("hidden");  // 오답 노트 숨기기
        document.querySelector('.container').classList.remove('hidden');  // 문제 표시
        updateProgress();  // 진행 상태 업데이트
        displayQuestion();  // 첫 번째 문제 다시 표시
    }
};

// 진행 상태 업데이트
function updateProgress() {
    document.getElementById("question-number").innerText = currentQuestionIndex + 1;
    document.getElementById("total-questions").innerText = totalQuestions;  // 총 문제 수는 현재 틀린 문제 수로 설정
}

// 틀린 문제와 정답을 표시
function displayWrongAnswers() {
    const wrongAnswerContainer = document.getElementById("wrong-answers"); // 오답 노트 영역
    let wrongAnswerHTML = "<ul style='max-height: 400px; overflow-y: scroll;'>";

    userAnswers.forEach((entry, index) => {
        if (!entry.isCorrect) {
            wrongAnswerHTML += `<li><strong>문제 ${index + 1}:</strong> ${entry.question}<br>
                                <strong>정답:</strong> ${entry.correctAnswer}<br>
                                <strong>내 답변:</strong> ${entry.userAnswer}</li><br>`;
        }
    });

    wrongAnswerHTML += "</ul>";
    wrongAnswerContainer.innerHTML = wrongAnswerHTML;  // 오답 노트 내용만 업데이트
}

// SKIP 버튼 클릭 시 틀린 문제로 처리
document.getElementById("skip").onclick = function () {
    const question = allQuestions[currentQuestionIndex];
    wrongQuestions.push(question);  // 스킵한 문제는 틀린 것으로 처리
    userAnswers.push({ question: question.question, correctAnswer: question.answer, userAnswer: "SKIPPED", isCorrect: false });
    nextQuestion();
};

// 주관식 답 제출 버튼
document.getElementById("submit-answer").onclick = function () {
    const input = document.getElementById("answer-input").value;
    if (input) {
        checkAnswer(input);
        document.getElementById("answer-input").value = "";  // 입력란 초기화
    }
};

// 초기화 및 퀴즈 시작
initializeQuiz();
