function add (a, b) {
  return a + b
}

function helloWorld () {
  return 'Hello World'
}

function case1(ticketPrice,FormList){
  var allweight=0;
  var maxfenghuang1=0;
  var maxfenghuang2=0;
  var maxxingkong=0;
  //统计所有重量
  for(let i=0;i<FormList.length;i++){
    allweight+=Number(FormList[i].weight);
    let temp1=FormList[i].weight;
    let standard1=30;
    if(temp1>maxfenghuang1&&temp1<=standard1){
      maxfenghuang1=temp1;
    }
    let temp2=FormList[i].weight;
    let standard2=20;
    if(temp2>maxfenghuang2&&temp2<=standard2){
      maxfenghuang2=temp2;
    }
    let temp3=FormList[i].weight;
    let standard3=20;
    if(temp3>maxxingkong&&temp3<=standard3){
      maxxingkong=temp3;
    }
  }
  if(allweight<=40+Number(maxfenghuang1)){
    let price = 0;
    return price;
  }else{
    return (allweight - 40 - Number(maxfenghuang1)) * Number(ticketPrice) * 0.015
  }
}

function Calculator(Flight,FormList){
  if(Flight.line==="area0"){
    let allweight=0;
    let flag=true;
    if(FormList.length>=7){
      flag=false;
    }
    if(Flight.VIPkinds===""){
      flag=false;
    }
    for(let i=0;i<FormList.length;i++){
      if(FormList[i].weight>32){
        flag=false;
        return false;
      }
      let l=Number(FormList[i].length);
      let w=Number(FormList[i].width);
      let h=Number(FormList[i].height);
      let alllength=l+w+h;

      if(alllength>203||alllength<60){
        flag=false;
        return false;
      }
      if(l>100){
        flag=false;
        return false;
      }if(w>60){
        flag=false;
        return false;
      }if(h>40){
        flag=false;
        return false;
      }

    }
    var commen=true;
    var maxfenghuang1=0;
    var maxfenghuang2=0;
    var maxxingkong=0;
    //统计所有重量
    for(let i=0;i<FormList.length;i++){
      if(Number(FormList[i].weight)>32||Number(FormList[i].weight)<2){
        return false;
      }
      allweight+=Number(FormList[i].weight);

      if(FormList[i].kinds!=="1"){
        commen=false;
      }
      let temp1=FormList[i].weight;
      let standard1=30;
      if(temp1>maxfenghuang1&&temp1<=standard1){
        maxfenghuang1=temp1;
      }
      let temp2=FormList[i].weight;
      let standard2=20;
      if(temp2>maxfenghuang2&&temp2<=standard2){
        maxfenghuang2=temp2;
      }
      let temp3=FormList[i].weight;
      let standard3=20;
      if(temp3>maxxingkong&&temp3<=standard3){
        maxxingkong=temp3;
      }
    }

    if(Flight.airkinds==="seat1"&&(Flight.peokind==="peo1"||Flight.peokind==="peo2")
      &&flag===true&&commen===true&&Flight.VIPkinds==="no"){
      if(allweight<=40){
        let price = 0;
        return price;
      }else{
        let price=(allweight-40)*Number(Flight.price)*0.015;
        return price;
      }
    }else if(Flight.airkinds==="seat2"&&(Flight.peokind==="peo1"||Flight.peokind==="peo2")
      &&flag===true&&commen===true&&Flight.VIPkinds==="no"){
      if(allweight<=30){
        let price = 0;
        return price;
      }else{
        let price=(allweight-30)*Number(Flight.price)*0.015;
        return price;
      }
    }else if((Flight.airkinds==="seat3"||Flight.airkinds==="seat4")&&(Flight.peokind==="peo1"||Flight.peokind==="peo2")
      &&flag===true&&commen===true&&Flight.VIPkinds==="no"){
      if(allweight<=20){
        let price = 0;
        return price;
      }else{
        let price=(allweight-20)*Number(Flight.price)*0.015;
        return price;
      }
    }else if((Flight.peokind==="peo3")&&flag===true&&commen===true&&Flight.VIPkinds==="no"){
      if(allweight<=10){
        let price = 0;
        return price;
      }else{
        let price=(allweight-10)*Number(Flight.price)*0.015;
        return price;
      }
    }
    //有VIP  seat1
    else if(Flight.airkinds==="seat1"&&(Flight.peokind==="peo1"||Flight.peokind==="peo2")
      &&flag===true&&commen===true&&Flight.VIPkinds==="card1"){
      if(allweight<=40+Number(maxfenghuang1)){
        let price = 0;
        return price;
      }else{
        let price=(allweight-40-Number(maxfenghuang1))*Number(Flight.price)*0.015;
        return price;
      }
    }else if(Flight.airkinds==="seat1"&&(Flight.peokind==="peo1"||Flight.peokind==="peo2")
      &&flag===true&&commen===true&&(Flight.VIPkinds==="card2"||Flight.VIPkinds==="card3")){
      if(allweight<=40+Number(maxfenghuang2)&&Flight.VIPkinds==="card2"){
        let price = 0;
        return price;
      }else if(allweight<=40+Number(maxxingkong)&&Flight.VIPkinds==="card3"){
        let price = 0;
        return price;
      }
      else{

        if(Flight.VIPkinds==="card2"){
          let price=(allweight-40-Number(maxfenghuang2))*Number(Flight.price)*0.015;
          return price;
        }else{
          let price=(allweight-40-Number(maxxingkong))*Number(Flight.price)*0.015;
          return price;
        }

      }
    }else if((Flight.peokind==="peo3")
      &&flag===true&&commen===true&&(Flight.VIPkinds==="card1")){
      if(allweight<=10+Number(maxfenghuang1)){
        let price = 0;
        return price;
      }else{
        let price=(allweight-10-Number(maxfenghuang1))*Number(Flight.price)*0.015;
        return price;
      }
    }else if((Flight.peokind==="peo3")
      &&flag===true&&commen===true&&(Flight.VIPkinds==="card2"||Flight.VIPkinds==="card3")){
      if(allweight<=10+Number(maxfenghuang2)&&Flight.VIPkinds==="card2"){
        let price = 0;
        return price;
      }else if(allweight<=10+Number(maxxingkong)&&Flight.VIPkinds==="card3"){
        let price = 0;
        return price;
      }else{

        if(Flight.VIPkinds==="card2"){
          let price=(allweight-10-Number(maxfenghuang2))*Number(Flight.price)*0.015;
          return price;
        }else{
          let price=(allweight-10-Number(maxxingkong))*Number(Flight.price)*0.015;
          return price;
        }
      }
    }
    //seat2
    else if(Flight.airkinds==="seat2"&&(Flight.peokind==="peo1"||Flight.peokind==="peo2")
      &&flag===true&&commen===true&&Flight.VIPkinds==="card1"){
      if(allweight<=30+Number(maxfenghuang1)){
        let price = 0;
        return price;
      }else{
        let price=(allweight-30-Number(maxfenghuang1))*Number(Flight.price)*0.015;
        return price;
      }
    }else if(Flight.airkinds==="seat2"&&(Flight.peokind==="peo1"||Flight.peokind==="peo2")
      &&flag===true&&commen===true&&(Flight.VIPkinds==="card2"||Flight.VIPkinds==="card3")){
      if(allweight<=30+Number(maxfenghuang2)&&Flight.VIPkinds==="card2"){
        let price = 0;
        return price;
      }else if(allweight<=30+Number(maxxingkong)&&Flight.VIPkinds==="card3"){
        let price = 0;
        return price;
      }else{
        if(Flight.VIPkinds==="card2"){
          let price=(allweight-30-Number(maxfenghuang2))*Number(Flight.price)*0.015;
          return price;
        }else{
          let price=(allweight-30-Number(maxfenghuang2))*Number(Flight.price)*0.015;
          return price;
        }
      }
    }

    else if((Flight.airkinds==="seat3"||Flight.airkinds==="seat4")&&(Flight.peokind==="peo1"||Flight.peokind==="peo2")
      &&flag===true&&commen===true&&Flight.VIPkinds==="card1"){
      if(allweight<=20+Number(maxfenghuang1)){
        let price = 0;
        return price;
      }else{
        let price=(allweight-20-Number(maxfenghuang1))*Number(Flight.price)*0.015;
        return price;
      }
    }else if((Flight.airkinds==="seat3"||Flight.airkinds==="seat4")&&(Flight.peokind==="peo1"||Flight.peokind==="peo2")
      &&flag===true&&commen===true&&(Flight.VIPkinds==="card2"||Flight.VIPkinds==="card3")){
      if(allweight<=20+Number(maxfenghuang2)&&Flight.VIPkinds==="card2"){
        let price = 0;
        return price;
      }else if(allweight<=20+Number(maxxingkong)&&Flight.VIPkinds==="card3"){
        let price = 0;
        return price;
      }else{
        if(Flight.VIPkinds==="card2"){
          let price=(allweight-20-Number(maxfenghuang2))*Number(Flight.price)*0.015;
          return price;
        }else{
          let price=(allweight-20-Number(maxfenghuang2))*Number(Flight.price)*0.015;
          return price;
        }
      }
    }

  }

  else if(Flight.line==="area1"){
    var allweight=0;
    var flag=true;
    for(let i=0;i<FormList.length;i++){
      if(FormList[i].weight>32){
        flag=false;
        break;
      }
      let l=Number(FormList[i].length);
      let w=Number(FormList[i].width);
      let h=Number(FormList[i].height);
      let alllength=l+w+h;
      if(alllength>203){
        flag=false;
        break;
      }
    }
    var commen=true;

    //统计所有重量
    for(let i=0;i<FormList.length;i++){
      allweight+=Number(FormList[i].weight);
      if(FormList[i].kinds!=="1"){
        commen=false;
      }

    }
    if((Flight.airkinds==="seat1"||Flight.airkinds==="seat2") &&commen==true){
      let price=0;
      let dollar=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        let two=0;
        if(alllength<=158&&alllength>=60&&weight>28&&weight<=32){
          if(two>2){
            price+=980;
            dollar+=150;
          }
          two+=1;
        }
        else if(alllength<=158&&alllength>=60&&weight>23&&weight<=28){
          if(two>2){
            price+=980;
            dollar+=150;
          }
          two+=1;
        }else if(alllength<=158&&alllength>=60&&weight>=2&&weight<=23){
          price+=0;
          dollar+=0;two+=1;
        }else if(alllength>158&&alllength<=203&&weight>=2&&weight<=23){
          price+=380;
          dollar+=60;
        }else if(alllength>158&&alllength<=203&&weight>23&&weight<=32) {
          price += 1400;
          dollar += 220;
        }
      }
      if(FormList.length>=3){
        let more=FormList.length-2;
        if(more===1){price+=1400;dollar+=220;}
        if(more===2){price+=3400;dollar+=530;}
        if(more>=3){price+=3400;dollar+=530;price+=(more-2)*3000;dollar+=(more-2)*460;}
      }
      return price;
    }else if(Flight.airkinds==="seat3"&&commen===true){
      let price=0;
      let dollar=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        let two=0;
        if(alllength<=158&&alllength>=60&&weight>28&&weight<=32){
          price+=980;
          dollar+=150;
        }
        else if(alllength<=158&&alllength>=60&&weight>23&&weight<=28){
          price+=980;
          dollar+=150;
        }else if(alllength<=158&&alllength>=60&&weight>=2&&weight<=23){
          price+=0;
          dollar+=0;two+=1;
        }else if(alllength>158&&alllength<=203&&weight>=2&&weight<=23){
          if(two>2){
            price+=380;
            dollar+=60;}two+=1;
        }else if(alllength>158&&alllength<=203&&weight>23&&weight<=32) {
          price += 1400;
          dollar += 220;
        }
      }
      if(FormList.length>=3){
        let more=FormList.length-2;
        if(more===1){price+=1400;dollar+=220;}
        if(more===2){price+=3400;dollar+=530;}
        if(more>=3){price+=3400;dollar+=530;price+=(more-2)*3000;dollar+=(more-2)*460;}
      }
      return price;
    }else if(Flight.airkinds==="seat4"&& commen===true){
      let price=0;
      let dollar=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        let two=0;
        if(alllength<=158&&alllength>=60&&weight>28&&weight<=32){
          price+=980;
          dollar+=150;
        }
        else if(alllength<=158&&alllength>=60&&weight>23&&weight<=28){
          price+=980;
          dollar+=150;
        }else if(alllength<=158&&alllength>=60&&weight>=2&&weight<=23){
          price+=0;
          dollar+=0;two+=1;
        }else if(alllength>158&&alllength<=203&&weight>=2&&weight<=23){
          if(two>2){
            price+=380;
            dollar+=60;}two+=1;
        }else if(alllength>158&&alllength<=203&&weight>23&&weight<=32) {
          price += 1400;
          dollar += 220;
        }
      }
      if(FormList.length>=2){
        let more=FormList.length-1;
        if(more===1){price+=1400;dollar+=220;}
        if(more===2){price+=3400;dollar+=530;}
        if(more>=3){price+=3400;dollar+=530;price+=(more-2)*3000;dollar+=(more-2)*460;}
      }
      return price;
    }
  }

  else if(Flight.line==="area2"){
    var allweight=0;
    var flag=true;
    for(let i=0;i<FormList.length;i++){
      if(FormList[i].weight>32){
        flag=false;
        break;
      }
      let l=Number(FormList[i].length);
      let w=Number(FormList[i].width);
      let h=Number(FormList[i].height);
      let alllength=l+w+h;
      if(alllength>203){
        flag=false;
        break;
      }
    }
    var commen=true;

    //统计所有重量
    for(let i=0;i<FormList.length;i++){
      allweight+=Number(FormList[i].weight);
      if(FormList[i].kinds!=="1"){
        commen=false;
      }

    }
    if((Flight.airkinds==="seat1"||Flight.airkinds==="seat2") &&commen==true){
      let price=0;
      let dollar=0;
      let ouyuan=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        let two=0;
        if(alllength<=158&&alllength>=60&&weight>28&&weight<=32){
          if(two>2){
            price+=690;
            dollar+=100;
            ouyuan+=85;
          }
          two+=1;
        }
        else if(alllength<=158&&alllength>=60&&weight>23&&weight<=28){
          if(two>2){
            price+=280;
            dollar+=40;
            ouyuan+=35;
          }
          two+=1;
        }else if(alllength<=158&&alllength>=60&&weight>=2&&weight<=23){
          two+=1;
        }else if(alllength>158&&alllength<=203&&weight>=2&&weight<=23){
          price+=690;
          dollar+=100;
          ouyuan+=85;
        }else if(alllength>158&&alllength<=203&&weight>23&&weight<=32) {
          price += 1100;
          dollar += 160;
          ouyuan+=140;
        }
      }
      if(FormList.length>=3){
        let more=FormList.length-2;
        if(more===1){price+=1100;dollar+=160;ouyuan+=140;}
        if(more===2){price+=2200;dollar+=320;ouyuan+=280;}
        if(more>=3){price+=2200;dollar+=320;ouyuan+=280;
          price+=(more-2)*1590;dollar+=(more-2)*230;ouyuan +=(more-2)*200;}
      }
      return price;
    }else if(Flight.airkinds==="seat3"&&commen===true){
      let price=0;
      let dollar=0;
      let ouyuan=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        let two=0;
        if(alllength<=158&&alllength>=60&&weight>28&&weight<=32){
          price+=690;
          dollar+=100;
          ouyuan+=85;
        }
        else if(alllength<=158&&alllength>=60&&weight>23&&weight<=28){
          price+=280;
          dollar+=40;
          ouyuan+=35;
        }else if(alllength<=158&&alllength>=60&&weight>=2&&weight<=23){
          two+=1;
        }else if(alllength>158&&alllength<=203&&weight>=2&&weight<=23){
          if(two>2){
            price+=690;
            dollar+=100;
            ouyuan+=85;}
        }else if(alllength>158&&alllength<=203&&weight>23&&weight<=32) {
          price += 1100;
          dollar += 160;
          ouyuan+=140;
        }
      }
      if(FormList.length>=3){
        let more=FormList.length-2;
        if(more===1){price+=1100;dollar+=160;ouyuan+=140;}
        if(more===2){price+=2200;dollar+=320;ouyuan+=280;}
        if(more>=3){price+=2200;dollar+=320;ouyuan+=280;
          price+=(more-2)*1590;dollar+=(more-2)*230;ouyuan +=(more-2)*200;}
      }
      return price;
    }else if(Flight.airkinds==="seat4"&& commen===true){
      let price=0;
      let dollar=0;
      let ouyuan=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        let two=0;
        if(alllength<=158&&alllength>=60&&weight>28&&weight<=32){
          price+=690;
          dollar+=100;
          ouyuan+=85;
        }
        else if(alllength<=158&&alllength>=60&&weight>23&&weight<=28){
          price+=280;
          dollar+=40;
          ouyuan+=35;
        }else if(alllength<=158&&alllength>=60&&weight>=2&&weight<=23){
          two+=1;
        }else if(alllength>158&&alllength<=203&&weight>=2&&weight<=23){
          if(two>2){
            price+=690;
            dollar+=100;
            ouyuan+=85;}
        }else if(alllength>158&&alllength<=203&&weight>23&&weight<=32) {
          price += 1100;
          dollar += 160;
          ouyuan+=140;
        }
      }
      if(FormList.length>=2){
        let more=FormList.length-1;
        if(more===1){price+=1100;dollar+=160;ouyuan+=140;}
        if(more===2){price+=2200;dollar+=320;ouyuan+=280;}
        if(more>=3){price+=2200;dollar+=320;ouyuan+=280;
          price+=(more-2)*1590;dollar+=(more-2)*230;ouyuan +=(more-2)*200;}
      }
      return price;
    }
  }

  else if(Flight.line==="area3"){
    var allweight=0;
    var flag=true;
    for(let i=0;i<FormList.length;i++){
      if(FormList[i].weight>32){
        flag=false;
        break;
      }
      let l=Number(FormList[i].length);
      let w=Number(FormList[i].width);
      let h=Number(FormList[i].height);
      let alllength=l+w+h;
      if(alllength>203){
        flag=false;
        break;
      }
    }
    var commen=true;

    //统计所有重量
    for(let i=0;i<FormList.length;i++){
      allweight+=Number(FormList[i].weight);
      if(FormList[i].kinds!=="1"){
        commen=false;
      }

    }
    if((Flight.airkinds==="seat1"||Flight.airkinds==="seat2") &&commen===true){
      let price=0;
      let dollar=0;
      let jiayuan=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        let two=0;
        if((alllength>158&&alllength<=203)||(weight>23&&weight<=32)) {
          price += 520;
          dollar += 75;
          jiayuan+=100;
        }else if((alllength>158&&alllength<=203)&&(weight>23&&weight<=32)) {
          price += 1170;
          dollar += 170;
          jiayuan+=225;
        }
      }
      if(FormList.length>=3){
        let more=FormList.length-2;
        if(more===1){price+=1170;dollar+=170;jiayuan+=225;}
        if(more===2){price+=2340;dollar+=340;jiayuan+=450;}
        if(more>=3){price+=2340;dollar+=340;jiayuan+=450;
          price+=(more-2)*1590;dollar+=(more-2)*230;jiayuan +=(more-2)*300;}
      }
      return price;
    }else if((Flight.airkinds==="seat3"||Flight.airkinds==="seat4")&&commen===true){
      let price=0;
      let dollar=0;
      let jiayuan=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        if((alllength>158&&alllength<=203)||(weight>23&&weight<=32)) {
          price += 520;
          dollar += 75;
          jiayuan+=100;
        }else if((alllength>158&&alllength<=203)&&(weight>23&&weight<=32)) {
          price += 1170;
          dollar += 170;
          jiayuan+=225;
        }
      }
      if(FormList.length>=3){
        let more=FormList.length-2;
        if(more===1){price+=1170;dollar+=170;jiayuan+=225;}
        if(more===2){price+=2340;dollar+=340;jiayuan+=450;}
        if(more>=3){price+=2340;dollar+=340;jiayuan+=450;
          price+=(more-2)*1590;dollar+=(more-2)*230;jiayuan +=(more-2)*300;}
      }
      return price;
    }
  }

  else if(Flight.line==="area4"){
    var allweight=0;
    var flag=true;
    for(let i=0;i<FormList.length;i++){
      if(FormList[i].weight>32){
        flag=false;
        break;
      }
      let l=Number(FormList[i].length);
      let w=Number(FormList[i].width);
      let h=Number(FormList[i].height);
      let alllength=l+w+h;
      if(alllength>203){
        flag=false;
        break;
      }
    }
    var commen=true;

    //统计所有重量
    for(let i=0;i<FormList.length;i++){
      allweight+=Number(FormList[i].weight);
      if(FormList[i].kinds!=="1"){
        commen=false;
      }

    }
    if((Flight.airkinds==="seat1"||Flight.airkinds==="seat2") &&commen==true){
      let price=0;
      let dollar=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        let two=0;
        if(alllength<=158&&alllength>=60&&weight>28&&weight<=32){
          if(two>2){
            price+=1040;
            dollar+=150;
          }
          two+=1;
        }
        else if(alllength<=158&&alllength>=60&&weight>23&&weight<=28){
          if(two>2){
            price+=690;
            dollar+=100;
          }
          two+=1;
        }else if(alllength<=158&&alllength>=60&&weight>=2&&weight<=23){
          price+=0;
          dollar+=0;two+=1;
        }else if(alllength>158&&alllength<=203&&weight>=2&&weight<=23){
          price+=1040;
          dollar+=150;
        }else if(alllength>158&&alllength<=203&&weight>23&&weight<=32) {
          price += 2050;
          dollar += 300;
        }
      }
      if(FormList.length>=3){
        let more=FormList.length-2;
        if(more===1){price+=1380;dollar+=200;}
        if(more===2){price+=2760;dollar+=400;}
        if(more>=3){price+=2760;dollar+=400;price+=(more-2)*1590;dollar+=(more-2)*230;}
      }
      return price;
    }else if((Flight.airkinds==="seat3"||Flight.airkinds==="seat4")&&commen===true){
      let price=0;
      let dollar=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        let two=0;
        if(alllength<=158&&alllength>=60&&weight>28&&weight<=32){
          price+=1040;
          dollar+=150;
        }
        else if(alllength<=158&&alllength>=60&&weight>23&&weight<=28){
          price+=690;
          dollar+=100;
        }else if(alllength<=158&&alllength>=60&&weight>=2&&weight<=23){
          price+=0;
          dollar+=0;two+=1;
        }else if(alllength>158&&alllength<=203&&weight>=2&&weight<=23){
          if(two>2){
            price+=1040;
            dollar+=150;}two+=1;
        }else if(alllength>158&&alllength<=203&&weight>23&&weight<=32) {
          price += 2050;
          dollar += 300;
        }
      }
      if(FormList.length>=3){
        let more=FormList.length-2;
        if(more===1){price+=1380;dollar+=200;}
        if(more===2){price+=2760;dollar+=400;}
        if(more>=3){price+=2760;dollar+=400;price+=(more-2)*1590;dollar+=(more-2)*230;}
      }
      return price;
    }
  }

  else if(Flight.line==="area5"){
    var allweight=0;
    var flag=true;
    for(let i=0;i<FormList.length;i++){
      if(FormList[i].weight>32){
        flag=false;
        break;
      }
      let l=Number(FormList[i].length);
      let w=Number(FormList[i].width);
      let h=Number(FormList[i].height);
      let alllength=l+w+h;
      if(alllength>203){
        flag=false;
        break;
      }
    }
    var commen=true;

    //统计所有重量
    for(let i=0;i<FormList.length;i++){
      allweight+=Number(FormList[i].weight);
      if(FormList[i].kinds!=="1"){
        commen=false;
      }

    }
    if((Flight.airkinds==="seat1"||Flight.airkinds==="seat2") &&commen==true){
      let price=0;
      let dollar=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        let two=0;
        if(alllength<=158&&alllength>=60&&weight>28&&weight<=32){
          if(two>2){
            price+=520;
            dollar+=75;
          }
          two+=1;
        }
        else if(alllength<=158&&alllength>=60&&weight>23&&weight<=28){
          if(two>2){
            price+=210;
            dollar+=30;
          }
          two+=1;
        }else if(alllength<=158&&alllength>=60&&weight>=2&&weight<=23){
          price+=0;
          dollar+=0;two+=1;
        }else if(alllength>158&&alllength<=203&&weight>=2&&weight<=23){
          price+=520;
          dollar+=75;
        }else if(alllength>158&&alllength<=203&&weight>23&&weight<=32) {
          price += 830;
          dollar += 120;
        }
      }
      if(FormList.length>=3){
        let more=FormList.length-2;
        if(more===1){price+=830;dollar+=120;}
        if(more===2){price+=1930;dollar+=280;}
        if(more>=3){price+=1930;dollar+=280;price+=(more-2)*1590;dollar+=(more-2)*230;}
      }
      return price;
    }else if(Flight.airkinds==="seat3"&&commen===true){
      let price=0;
      let dollar=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        let two=0;
        if(alllength<=158&&alllength>=60&&weight>28&&weight<=32){
          price+=520;
          dollar+=75;
        }
        else if(alllength<=158&&alllength>=60&&weight>23&&weight<=28){
          price+=210;
          dollar+=30;
        }else if(alllength<=158&&alllength>=60&&weight>=2&&weight<=23){
          price+=0;
          dollar+=0;two+=1;
        }else if(alllength>158&&alllength<=203&&weight>=2&&weight<=23){
          if(two>2){
            price+=520;
            dollar+=75;}two+=1;
        }else if(alllength>158&&alllength<=203&&weight>23&&weight<=32) {
          price += 830;
          dollar += 120;
        }
      }
      if(FormList.length>=3){
        let more=FormList.length-2;
        if(more===1){price+=830;dollar+=120;}
        if(more===2){price+=1930;dollar+=280;}
        if(more>=3){price+=1930;dollar+=280;price+=(more-2)*1590;dollar+=(more-2)*230;}
      }
      return price;
    }else if(Flight.airkinds==="seat4"&& commen===true){
      let price=0;
      let dollar=0;
      for(let i=0;i<FormList.length;i++){
        let l=Number(FormList[i].length);
        let w=Number(FormList[i].width);
        let h=Number(FormList[i].height);
        let weight=Number(FormList[i].weight);
        let alllength=l+w+h;
        let two=0;
        if(alllength<=158&&alllength>=60&&weight>28&&weight<=32){
          price+=520;
          dollar+=75;
        }
        else if(alllength<=158&&alllength>=60&&weight>23&&weight<=28){
          price+=210;
          dollar+=30;
        }else if(alllength<=158&&alllength>=60&&weight>=2&&weight<=23){
          price+=0;
          dollar+=0;two+=1;
        }else if(alllength>158&&alllength<=203&&weight>=2&&weight<=23){
          if(two>2){
            price+=520;
            dollar+=75;}two+=1;
        }else if(alllength>158&&alllength<=203&&weight>23&&weight<=32) {
          price += 830;
          dollar += 120;
        }
      }
      if(FormList.length>=1){
        let more=FormList.length-1;
        if(more===1){price+=830;dollar+=120;}
        if(more===2){price+=1930;dollar+=280;}
        if(more>=3){price+=1930;dollar+=280;price+=(more-2)*1590;dollar+=(more-2)*230;}
      }
      return price;
    }
  }
}

module.exports = {
  add,
  helloWorld,
  case1,
  Calculator
}
