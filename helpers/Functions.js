import Config from "./Config";
import Store from "./Store";

/*SE DEBE PASAR EL EVENT*/
const InputTypeFilter=(event)=>{
  return event.target.value;
}

const CutString=(text,wordsToCut)=>{
    // if (wordsToCut===undefined) {
    //   wordsToCut = 20;
    // }
    // var wordsArray = text.split(" ");
    // if(wordsArray.length>wordsToCut){
    //     var strShort = "";
    //     for(i = 0; i < wordsToCut; i++){
    //         strShort += wordsArray[i] + " ";
    //     }
    //     return strShort+"...";
    // }else{
    //     return text;
    // }
};

const FechaHoy = ()  =>{
  /*FECHA DE HOY*/
  let date    =   new Date( );
  let day     =   date.getDate();
      if (day < 10) {
        day = "0"+day;
      }
  let month  =  date.getUTCMonth();
      if (month < 10) {
        month  =  month+1;
        month  =  "0"+month;
      }else {
        month  =  month+1;
      }

  let year   =  date.getUTCFullYear();
  let newDate = year+"-"+month+"-"+day;
  return newDate;
}

const Convertir_base64 = (result)  =>{
  // return new Promise(resolve => {
  //   let base64;
  //   base64 =  FileSystem.readAsStringAsync(  result.uri,{encoding: FileSystem.EncodingType.Base64,});
  //   resolve(base64)
  // });
}


const Get = (modulo,m,objeto,state,loading) =>{
  let headers   =   new Headers();
  let data      =   new FormData();

  console.log("CALLING");

  Object.entries(objeto).map((v,k) => {
    return data.append (v[0],v[1]);
  })

  data.append ("PUBLIC_KEY", Config.PUBLIC_KEY);

  let cabecera  =   {
                      headers:headers,
                      method: "POST",
                      body: data
                    }
  let url   =       Config.ConfigApirest + "get?modulo="+modulo+"&m="+m+"&formato=json";
  fetch(url,cabecera)
      .then(response  =>  response.json()        )
      .then(data      =>  { state(data.response.data);  loading(false) })
      .catch((error)  =>  { console.log(error);  loading(false)  });
}

const PostAsync =  async (modulo,m,objeto,context) =>{
  // let me        =   (Store.get("user")!=null)?Store.get("user"):{token:"PGRW_REGISTER"};
  // let headers   =   new Headers();
  // let data      =   new FormData();
  //
  // Object.entries(objeto).map((v,k) => {
  //   return data.append (v[0],v[1]);
  // })
  //
  // data.append ("u", me.token);
  // data.append ("token", me.token);
  //
  // data.append ("PUBLIC_KEY", Config.PUBLIC_KEY);
  //
  // if (Store.get("security")===null) {
  //   data.append ("PRIVATE_KEY", Config.PRIVATE_KEY);
  // }else {
  //   data.append ("tokens_access",Store.get("security"));
  // }
  //
  // let cabecera  =   {
  //                     headers:headers,
  //                     method: "POST",
  //                     body: data
  //                   }
  //
  // try {
  //   const response    =   await fetch(Config.ConfigApirest + "get?modulo="+modulo+"&m="+m+"&formato=json&u="+me.token,cabecera);
  //   const json        =   await response.json();
  //   if (json.response.callback!==undefined) {
  //     let _function   =   json.response.callback;
  //         _function(data.response)
  //     //eval(data.response.callback+"(data.response)");
  //   }
  //   return json;
  // }catch (error) {
  //   return error;
  // }
}


const Post      =   (modulo,m,objeto,context) =>{
  // let me        =   (Store.get("user")!=null)?Store.get("user"):{token:"PGRW_REGISTER"};
  // let headers   =   new Headers();
  // let data      =   new FormData();
  //
  // Object.entries(objeto).map((v,k) => {
  //   return data.append (v[0],v[1]);
  // })
  //
  // data.append ("u", me.token);
  // data.append ("token", me.token);
  //
  // data.append ("PUBLIC_KEY", Config.PUBLIC_KEY);
  //
  // if (Store.get("security")===null) {
  //   data.append ("PRIVATE_KEY", Config.PRIVATE_KEY);
  // }else {
  //   data.append ("tokens_access",Store.get("security"));
  // }
  //
  // let cabecera  =   {
  //                     headers:headers,
  //                     method: "POST",
  //                     body: data
  //                   }
  //
  // fetch(Config.ConfigApirest + "get?modulo="+modulo+"&m="+m+"&formato=json&u="+me.token,cabecera)
  //       .then(response  =>  response.json()        )
  //       .then(data      =>  { (data.response.callback!==undefined)?eval(data.response.callback+"(data.response,context)"):console.log(data) })
  //       .catch((error)  =>  { console.log(error)  });
}

const setSession =  (data)=>{
  Store.set("user",data)
  document.location.href  = Config.ConfigAppUrl+'admin'
}

const dialog = (data,context)=>{

  context.setState({
                        dialog:{
                                  status:true,
                                  title:"Importante",
                                  message:data.message,
                                  callback:false
                        }
                    })

  //console.log(data,context);
}

const setTokenStore=(data)=>{
  Store.set("security",data.data);
}


export default {  CutString,
                  FechaHoy,
                  Convertir_base64,
                  Get,
                  Post,
                  PostAsync,
                  InputTypeFilter
                }
