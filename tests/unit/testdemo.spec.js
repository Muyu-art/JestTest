const { add } = require('./testcase')
const { helloWorld } = require('./testcase')
const { Calculator } = require('./testcase')
const { case1 } = require('./testcase')

describe('hello world', () => {
  it('should render correct result', () => {
    expect(helloWorld()).toEqual('Hello World')
  })
})

test('test add', () => {
  expect(add(1, 2)).toBe(3)
})

test('test', () => {
  expect(case1(1000, FormList1)).toBe(0)
})
/*
* area0-国内航线
* area1-区域一
* area2-区域二
* area3-区域三
* area4-区域四
* area5-区域五
* seat1-豪华头等舱、头等舱
* seat2-公务舱
* seat3-悦享经济舱、超级经济舱
* seat4-经济舱
* peo1-成人客票
* peo2-儿童客票
* peo3-婴儿客票
* card1-凤凰知音终身白金卡、白金卡
* card2-凤凰知音金卡、银卡
* card3-星空联盟金卡
* no-无vip卡
*
* */
const Flight1 = {
  line: 'area0',
  airkinds: 'seat1',
  peokind: 'peo1',
  VIPkinds: 'card1',
  price: 1000,
  checked: false
}

const FormList1 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]
test('TestCase1', () => {
  expect(Calculator(Flight1, FormList1)).toBe(0)
})

const Flight2 = {
  line: 'area0',
  airkinds: 'seat1',
  peokind: 'peo1',
  VIPkinds: 'card1',
  price: 1000,
  checked: false
}

const FormList2 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase2', () => {
  expect(Calculator(Flight2, FormList2)).toBe(285)
})

const Flight3 = {
  line: 'area0',
  airkinds: 'seat2',
  peokind: 'peo2',
  VIPkinds: 'card2',
  price: 1000,
  checked: false
}

const FormList3 = [
  {
    kinds: '1',
    length: 101,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]
test('TestCase3', () => {
  expect(Calculator(Flight3, FormList3)).toBe(false)
})

const Flight4 = {
  line: 'area0',
  airkinds: 'seat3',
  peokind: 'peo3',
  VIPkinds: 'card3',
  price: 1000,
  checked: false
}

const FormList4 = [
  {
    kinds: '1',
    length: 99,
    width: 61,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase4', () => {
  expect(Calculator(Flight4, FormList4)).toBe(false)
})

const Flight5 = {
  line: 'area0',
  airkinds: 'seat4',
  peokind: 'peo1',
  VIPkinds: 'no',
  price: 1000,
  checked: false
}

const FormList5 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 45,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase5', () => {
  expect(Calculator(Flight5, FormList5)).toBe(false)
})

const Flight6 = {
  line: 'area0',
  airkinds: 'seat1',
  peokind: 'peo1',
  VIPkinds: 'no',
  price: 1000,
  checked: false
}

const FormList6 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 33
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase6', () => {
  expect(Calculator(Flight6, FormList6)).toBe(false)
})

const Flight7 = {
  line: 'area0',
  airkinds: 'seat1',
  peokind: 'peo1',
  VIPkinds: 'no',
  price: 1000,
  checked: false
}

const FormList7 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 1
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase7', () => {
  expect(Calculator(Flight7, FormList7)).toBe(false)
})

const Flight8 = {
  line: 'area0',
  airkinds: 'seat2',
  peokind: 'peo2',
  VIPkinds: 'card3',
  price: 1000,
  checked: false
}

const FormList8 = [
  {
    kinds: '1',
    length: 99,
    width: 60,
    height: 45,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase8', () => {
  expect(Calculator(Flight8, FormList8)).toBe(false)
})

const Flight9 = {
  line: 'area0',
  airkinds: 'seat1',
  peokind: 'peo1',
  VIPkinds: 'no',
  price: 1000,
  checked: false
}

const FormList9 = [
  {
    kinds: '1',
    length: 20,
    width: 15,
    height: 14,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase9', () => {
  expect(Calculator(Flight9, FormList9)).toBe(false)
})

const Flight10 = {
  line: 'area1',
  airkinds: 'seat1',
  peokind: 'peo1',
  price: 1000,
  checked: false
}

const FormList10 = [
  {
    kinds: '1',
    length: 60,
    width: 40,
    height: 20,
    weight: 32
  },
  {
    kinds: '1',
    length: 60,
    width: 40,
    height: 20,
    weight: 27
  }
]

test('TestCase10', () => {
  expect(Calculator(Flight10, FormList10)).toBe(0)
})

const Flight11 = {
  line: 'area1',
  airkinds: 'seat4',
  peokind: 'peo1',
  price: 1000,
  checked: false
}

const FormList11 = [
  {
    kinds: '1',
    length: 60,
    width: 40,
    height: 20,
    weight: 32
  },
  {
    kinds: '1',
    length: 60,
    width: 40,
    height: 20,
    weight: 27
  }
]

test('TestCase11', () => {
  expect(Calculator(Flight11, FormList11)).toBe(3360)
})

const Flight12 = {
  line: 'area1',
  airkinds: 'seat2',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList12 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase12', () => {
  expect(Calculator(Flight12, FormList12)).toBe(2800)
})

const Flight13 = {
  line: 'area2',
  airkinds: 'seat1',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList13 = [
  {
    kinds: '1',
    length: 60,
    width: 40,
    height: 20,
    weight: 32
  },
  {
    kinds: '1',
    length: 60,
    width: 40,
    height: 20,
    weight: 27
  }
]

test('TestCase13', () => {
  expect(Calculator(Flight13, FormList13)).toBe(0)
})

const Flight14 = {
  line: 'area2',
  airkinds: 'seat4',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList14 = [
  {
    kinds: '1',
    length: 60,
    width: 40,
    height: 20,
    weight: 32
  },
  {
    kinds: '1',
    length: 60,
    width: 40,
    height: 20,
    weight: 27
  }
]

test('TestCase14', () => {
  expect(Calculator(Flight14, FormList14)).toBe(2070)
})

const Flight15 = {
  line: 'area2',
  airkinds: 'seat2',
  peokind: 'peo1',
  price: 1000,
  checked: false
}

const FormList15 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase15', () => {
  expect(Calculator(Flight15, FormList15)).toBe(2200)
})

const Flight16 = {
  line: 'area3',
  airkinds: 'seat1',
  peokind: 'peo1',
  price: 1000,
  checked: false
}

const FormList16 = [
  {
    kinds: '1',
    length: 60,
    width: 40,
    height: 20,
    weight: 32
  },
  {
    kinds: '1',
    length: 60,
    width: 40,
    height: 20,
    weight: 27
  }
]

test('TestCase16', () => {
  expect(Calculator(Flight16, FormList16)).toBe(1040)
})

const Flight17 = {
  line: 'area3',
  airkinds: 'seat4',
  peokind: 'peo1',
  price: 1000,
  checked: false
}

const FormList17 = [
  {
    kinds: '1',
    length: 60,
    width: 40,
    height: 20,
    weight: 32
  },
  {
    kinds: '1',
    length: 60,
    width: 40,
    height: 20,
    weight: 27
  }
]

test('TestCase17', () => {
  expect(Calculator(Flight17, FormList17)).toBe(1040)
})

const Flight18 = {
  line: 'area3',
  airkinds: 'seat2',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList18 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase18', () => {
  expect(Calculator(Flight18, FormList18)).toBe(1040)
})

const Flight19 = {
  line: 'area3',
  airkinds: 'seat2',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList19 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase19', () => {
  expect(Calculator(Flight19, FormList19)).toBe(1040)
})

const Flight20 = {
  line: 'area3',
  airkinds: 'seat2',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList20 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase20', () => {
  expect(Calculator(Flight20, FormList20)).toBe(1040)
})

const Flight21 = {
  line: 'area3',
  airkinds: 'seat2',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList21 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase21', () => {
  expect(Calculator(Flight21, FormList21)).toBe(1040)
})

const Flight22 = {
  line: 'area3',
  airkinds: 'seat2',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList22 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase22', () => {
  expect(Calculator(Flight22, FormList22)).toBe(1040)
})

const Flight23 = {
  line: 'area3',
  airkinds: 'seat2',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList23 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase23', () => {
  expect(Calculator(Flight23, FormList23)).toBe(1040)
})

const Flight24 = {
  line: 'area3',
  airkinds: 'seat2',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList24 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase24', () => {
  expect(Calculator(Flight24, FormList24)).toBe(1040)
})

const Flight25 = {
  line: 'area3',
  airkinds: 'seat2',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList25 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase25', () => {
  expect(Calculator(Flight25, FormList25)).toBe(1040)
})

const Flight26 = {
  line: 'area3',
  airkinds: 'seat2',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList26 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase26', () => {
  expect(Calculator(Flight26, FormList26)).toBe(1040)
})

const Flight27 = {
  line: 'area3',
  airkinds: 'seat2',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList27 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase27', () => {
  expect(Calculator(Flight27, FormList27)).toBe(1040)
})

const Flight28 = {
  line: 'area3',
  airkinds: 'seat2',
  peokind: 'peo2',
  price: 1000,
  checked: false
}

const FormList28 = [
  {
    kinds: '1',
    length: 99,
    width: 59,
    height: 35,
    weight: 32
  },
  {
    kinds: '1',
    length: 98,
    width: 58,
    height: 32,
    weight: 27
  }
]

test('TestCase28', () => {
  expect(Calculator(Flight28, FormList28)).toBe(1040)
})

describe('BaggageCalculator-UnitTest', () => {
  test('TestCase1', () => {
    expect(Calculator(Flight1, FormList1)).toBe(0)
  })
  test('TestCase2', () => {
    expect(Calculator(Flight2, FormList2)).toBe(285)
  })
  test('TestCase3', () => {
    expect(Calculator(Flight3, FormList3)).toBe(false)
  })
  test('TestCase4', () => {
    expect(Calculator(Flight4, FormList4)).toBe(false)
  })
  test('TestCase5', () => {
    expect(Calculator(Flight5, FormList5)).toBe(false)
  })
  test('TestCase6', () => {
    expect(Calculator(Flight6, FormList6)).toBe(false)
  })
  test('TestCase7', () => {
    expect(Calculator(Flight7, FormList7)).toBe(false)
  })
  test('TestCase8', () => {
    expect(Calculator(Flight8, FormList8)).toBe(false)
  })
  test('TestCase9', () => {
    expect(Calculator(Flight9, FormList9)).toBe(false)
  })
  test('TestCase10', () => {
    expect(Calculator(Flight10, FormList10)).toBe(0)
  })
  test('TestCase11', () => {
    expect(Calculator(Flight11, FormList11)).toBe(3360)
  })
  test('TestCase12', () => {
    expect(Calculator(Flight12, FormList12)).toBe(2800)
  })
  test('TestCase13', () => {
    expect(Calculator(Flight13, FormList13)).toBe(0)
  })
  test('TestCase14', () => {
    expect(Calculator(Flight14, FormList14)).toBe(2070)
  })
  test('TestCase15', () => {
    expect(Calculator(Flight15, FormList15)).toBe(2200)
  })
  test('TestCase16', () => {
    expect(Calculator(Flight16, FormList16)).toBe(1040)
  })
  test('TestCase17', () => {
    expect(Calculator(Flight17, FormList17)).toBe(1040)
  })
  test('TestCase18', () => {
    expect(Calculator(Flight18, FormList18)).toBe(1040)
  })
  test('TestCase19', () => {
    expect(Calculator(Flight19, FormList19)).toBe(1040)
  })
  test('TestCase20', () => {
    expect(Calculator(Flight20, FormList20)).toBe(1040)
  })
  test('TestCase21', () => {
    expect(Calculator(Flight21, FormList21)).toBe(1040)
  })
  test('TestCase22', () => {
    expect(Calculator(Flight22, FormList22)).toBe(1040)
  })
  test('TestCase23', () => {
    expect(Calculator(Flight24, FormList23)).toBe(1040)
  })
  test('TestCase24', () => {
    expect(Calculator(Flight24, FormList24)).toBe(1040)
  })
  test('TestCase25', () => {
    expect(Calculator(Flight25, FormList25)).toBe(1040)
  })
  test('TestCase26', () => {
    expect(Calculator(Flight26, FormList26)).toBe(1040)
  })
  test('TestCase27', () => {
    expect(Calculator(Flight27, FormList27)).toBe(1040)
  })
  test('TestCase28', () => {
    expect(Calculator(Flight28, FormList28)).toBe(1040)
  })
})
