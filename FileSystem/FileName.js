function Filename(data=new Date()){
    return(`${data.getDate()}-${data.getMonth()}-${data.getFullYear()},${data.getHours()}-${data.getMinutes()}`)
}
module.exports ={
    Filename
}