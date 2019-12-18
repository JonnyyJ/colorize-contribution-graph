(function(){
    //If on someone's Github profile
    const activityContainer = document.querySelector('.graph-before-activity-overview')
    if(activityContainer)
    initColorize()
})()

function initColorize()
{
    chrome.storage.local.get('color', function(data){
        if(!data.color)
        data.color = '4594A8'
        let mainColorHex = `#${data.color}`

        const legendItems = document.querySelectorAll('.contrib-legend ul li')
        const originalColors = []
        for(let li of legendItems)
           originalColors.push(li.getAttribute('style').split(':')[1].trim())

           colorizeActivity(mainColorHex)
           colorizeLegend(mainColorHex, originalColors, legendItems)
           colorizeDays(mainColorHex, originalColors)
    })
}

function colorizeActivity(color)
{

}

function colorizeLegend(mainColor, originalColors, legendItems)
{

}

function colorizeDays(mainColor, originalColors)
{

}

function colorLuminance(hex,lum)
{

}