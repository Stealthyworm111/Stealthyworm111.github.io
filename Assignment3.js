let elem = [];
elem[1]
  = document.getElementById("1");
elem[2]
  = document.getElementById("2");
elem[3]
  = document.getElementById("3");
elem[4]
  = document.getElementById("4");
elem[5]
  = document.getElementById("5");
elem[6]
  = document.getElementById("6");
elem[7]
  = document.getElementById("7");
elem[8]
  = document.getElementById("8");
elem[9]
  = document.getElementById("9");
elem[10]
  = document.getElementById("10");
elem[11]
  = document.getElementById("11");
elem[12]
  = document.getElementById("12");
elem[13]
  = document.getElementById("13");
elem[14]
  = document.getElementById("14");
elem[15]
  = document.getElementById("15");
elem[16]
  = document.getElementById("16");
elem[17]
  = document.getElementById("17");
elem[18]
  = document.getElementById("18");
elem[19]
  = document.getElementById("totals");

// assign a function to the + button
elem[1].children[4].children[0].onclick 
  = (function(){add1(elem[1])});
elem[2].children[4].children[0].onclick 
  = function(){add1(elem[2])};
elem[3].children[4].children[0].onclick 
  = function(){add1(elem[3]);};
elem[4].children[4].children[0].onclick 
  = function(){add1(elem[4]);};
elem[5].children[4].children[0].onclick 
  = function(){add1(elem[5]);};
elem[6].children[4].children[0].onclick 
  = function(){add1(elem[6])};
elem[7].children[4].children[0].onclick 
  = function(){add1(elem[7]);};
elem[8].children[4].children[0].onclick 
  = function(){add1(elem[8]);};
elem[9].children[4].children[0].onclick 
  = function(){add1(elem[9]);};
elem[10].children[4].children[0].onclick
  = function(){add1(elem[10]);};
elem[11].children[4].children[0].onclick 
  = function(){add1(elem[11]);};
elem[12].children[4].children[0].onclick 
  = function(){add1(elem[12]);};
elem[13].children[4].children[0].onclick 
  = function(){add1(elem[14]);};
elem[14].children[4].children[0].onclick 
  = function(){add1(elem[14]);};
elem[15].children[4].children[0].onclick 
  = function(){add1(elem[15]);};
elem[16].children[4].children[0].onclick 
  = function(){add1(elem[16]);};
elem[17].children[4].children[0].onclick 
  = function(){add1(elem[17]);};
elem[18].children[4].children[0].onclick 
  = function(){add1(elem[18]);};


//subtract function
elem[1].children[4].children[1].onclick 
  = function(){subtract1(elem[1])};
elem[2].children[4].children[1].onclick 
  = function(){subtract1(elem[2])};
elem[3].children[4].children[1].onclick 
  = function(){subtract1(elem[3]);};
elem[4].children[4].children[1].onclick 
  = function(){subtract1(elem[4]);};
elem[5].children[4].children[1].onclick 
  = function(){subtract1(elem[5]);};
elem[6].children[4].children[1].onclick 
  = function(){subtract1(elem[6]);};
elem[7].children[4].children[1].onclick 
  = function(){subtract1(elem[8]);};
elem[8].children[4].children[1].onclick 
  = function(){subtract1(elem[8]);};
elem[9].children[4].children[1].onclick 
  = function(){subtract1(elem[9]);};
elem[10].children[4].children[1].onclick 
  = function(){subtract1(elem[10]);};
elem[11].children[4].children[1].onclick 
  = function(){subtract1(elem[11]);};
elem[12].children[4].children[1].onclick 
  = function(){subtract1(elem[12]);};
elem[13].children[4].children[1].onclick 
  = function(){subtract1(elem[13]);};
elem[14].children[4].children[1].onclick
  = function(){subtract1(elem[14]);};
elem[15].children[4].children[1].onclick 
  = function(){subtract1(elem[15]);};
elem[16].children[4].children[1].onclick 
  = function(){subtract1(elem[16]);};
elem[17].children[4].children[1].onclick 
  = function(){subtract1(elem[17]);};
elem[18].children[4].children[1].onclick 
  = function(){subtract1(elem[18]);};

//clear row data buttom
elem[1].children[5].children[0].onclick 
  = function(){clearRowData(elem[1]);};
elem[2].children[5].children[0].onclick 
  = function(){clearRowData(elem[2]);};
elem[3].children[5].children[0].onclick 
  = function(){clearRowData(elem[3]);};
elem[4].children[5].children[0].onclick 
  = function(){clearRowData(elem[4]);};
elem[5].children[5].children[0].onclick 
  = function(){clearRowData(elem[5]);};
elem[6].children[5].children[0].onclick 
  = function(){clearRowData(elem[6]);};
elem[7].children[5].children[0].onclick 
  = function(){clearRowData(elem[7]);};
elem[8].children[5].children[0].onclick 
  = function(){clearRowData(elem[8]);};
elem[9].children[5].children[0].onclick 
  = function(){clearRowData(elem[9]);};
elem[10].children[5].children[0].onclick 
  = function(){clearRowData(elem[10]);};
elem[11].children[5].children[0].onclick 
  = function(){clearRowData(elem[11]);};
elem[12].children[5].children[0].onclick 
  = function(){clearRowData(elem[12]);};
elem[13].children[5].children[0].onclick 
  = function(){clearRowData(elem[13]);};
elem[14].children[5].children[0].onclick 
  = function(){clearRowData(elem[14]);};
elem[15].children[5].children[0].onclick 
  = function(){clearRowData(elem[15]);};
elem[16].children[5].children[0].onclick 
  = function(){clearRowData(elem[16]);};
elem[17].children[5].children[0].onclick 
  = function(){clearRowData(elem[17]);};
elem[18].children[5].children[0].onclick 
  = function(){clearRowData(elem[18]);};

//total button
elem[19].children[4].children[0].onclick
  = function(){totalOut();};


//clear table data button
elem[19].children[5].children[0].onclick
  = function(){clearTableData();};



// create an "add1" function
function add1 (ele) {
  if(ele.children[2].innerHTML == "-")
   {
      ele.children[2].innerHTML = "1";
   }
 
  else 
  {
    let currentScore = ele.children[2].innerHTML;
    if(currentScore<8)
      {
        currentScore = Number.parseInt(currentScore);
        ele.children[2].innerHTML = currentScore + 1;
      }
  }
  
  ele.children[3].innerHTML = ele.children[2].innerHTML-ele.children[1].innerHTML
  
  
}

function subtract1 (ele) {
  if(ele.children[2].innerHTML > 1) 
  {
   let currentScore = ele.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    ele.children[2].innerHTML = currentScore - 1;
    ele.children[3].innerHTML = ele.children[2].innerHTML-ele.children[1].innerHTML;
  }

  }
function clearRowData (ele) {
  
 ele.children[2].innerHTML = "-";
 ele.children[3].innerHTML = "-";
  
}

function totalOut()
{
  elem[19].children[1].innerHTML = 0
  elem[19].children[2].innerHTML = 0
  elem[19].children[3].innerHTML = 0
  
  for(let i = 1;i<=18;i++)
    {
      elem[19].children[1].innerHTML = parseInt(elem[19].children[1].innerHTML) + parseInt(elem[i].children[1].innerHTML);
    }
  
  for(let i = 1;i<=18;i++)
    {
      if(elem[i].children[2].innerHTML!= "-")
      elem[19].children[2].innerHTML = parseInt(elem[19].children[2].innerHTML) + parseInt(elem[i].children[2].innerHTML);
      else
        elem[19].children[2].innerHTML = parseInt(elem[19].children[2].innerHTML) + 0;
    }
  
  for(let i = 1;i<=18;i++)
    {
      if(elem[i].children[3].innerHTML!= "-")
      elem[19].children[3].innerHTML = parseInt(elem[19].children[3].innerHTML) + parseInt(elem[i].children[3].innerHTML);
      else
        elem[19].children[3].innerHTML = parseInt(elem[19].children[3].innerHTML) + 0;
    }
}
  
  function clearTableData()
  {
    for(let i = 1;i<18;i++)
      {
         
           elem[i].children[2].innerHTML = "-";
           elem[i].children[3].innerHTML = "-";
        
        
      }
  }
