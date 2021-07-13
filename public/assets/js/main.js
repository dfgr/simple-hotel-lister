$(document).ready(()=>{
    const notify = window.createNotification({closeOnClick: 1,displayCloseButton: 1,showDuration: 3000,theme: "success"})
    isClickedAddHotel = false;
    let hotelNumber
    let imagesUrls = []
    $("#addHotelBtn").click(()=>{
        console.log(isClickedAddHotel)
        if(isClickedAddHotel){
            
            $.post("/api/addHotel", {"number":hotelNumber,"hotelName": $("#hotelName").val(), "locationUrl":$("#locationUrl").val(),"distanceToSea":$("#distanceToSea").val(),"familyCount":$("#familyCount").val(),"price":$("#price").val(),images:imagesUrls} ,(result) => {
                notify({title:"Otel Eklendi", message:'Otel Güncellendi'})
            });
            $("#hotelName").val("")
            $("#locationUrl").val("")
            $("#distanceToSea").val("")
            $("#familyCount").val("")
            $("#price").val("")
            $("#hotelForm").hide("slow")
            imagesUrls=[]
        }
        else if(!isClickedAddHotel){
            $("#hotelForm").show("slow")
        }
        isClickedAddHotel = !isClickedAddHotel;
    })
    $("#addImage").click(()=>{
        imagesUrls.push($("#hotelmageUrl").val())
        notify({title:"Resim Urlsi Eklendi", message: $("#hotelmageUrl").val()+' eklendi'})
        $("#familyCount").val("")
    })
})