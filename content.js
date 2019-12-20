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
    const activity = document.querySelector('.js-highlight-blob')
    if(activity)
    {
      const axes = document.querySelectorAll('.activity-overview-axis')
      const ellipses = document.querySelectorAll('.activity-overview-point')
      const blob = document.querySelector('.js-highlight-blob')
      activity.setAttribute('stroke', color)
      blob.style.fill = color
      for(let ellipse of ellipses)
        ellipse.style.stroke = color
      for(let axis of axes)
        axis.style.stroke = color
    }

}

function colorizeLegend(mainColor, originalColors, legendItems)
{
  legendItems[0].setAttribute('style', `background-color:${originalColors[0]}`)
  legendItems[1].setAttribute('style', `background-color:${colorLuminance(mainColor, 0.9)}`)
  legendItems[2].setAttribute('style', `background-color:${colorLuminance(mainColor, 0.75)}`)
  legendItems[3].setAttribute('style', `background-color:${colorLuminance(mainColor, 0.5)}`)
  legendItems[4].setAttribute('style', `background-color:${mainColor}`)

}

function colorizeDays(mainColor, originalColors)
{

}

function colorLuminance(hex,lum)
{

}