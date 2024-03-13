


const blockData = [
  {
      title: "Park 1",
      description: "Terminal 1",
      parkTitle: "P1",
      tooltip:"park 1",
      available: false
  },
  {
      title: "Park 2",
      description: "Terminal 2",
      parkTitle: "P2",
      tooltip:"park 2",
      available: true
  },
  {
      title: "Park 7",
      description: "Terminal 1",
      parkTitle: "P7",
      tooltip:"park 7",
      available: true
  },
  {
      title: "Park 3",
      description: "Terminal 1",
      parkTitle: "P3",
      tooltip:"park 3",
      available: true
  },
  {
      title: "Park 4",
      description: "Terminal 1",
      parkTitle: "P4",
      tooltip:"park 4",
      available: false
  }, {
    title: "Park 5",
    description: "Terminal 1",
    parkTitle: "P5",
    tooltip:"park 5",
    available: true
}, {
  title: "Park 6",
  description: "Terminal 1",
  parkTitle: "P6",
  tooltip:"park 6",
  available: false
}, {
  title: "Park 8",
  description: "Terminal 1",
  parkTitle: "P8",
  tooltip:"park 8",
  available: true
}, {
  title: "Park 9",
  description: "Terminal 1",
  parkTitle: "P9",
  tooltip:"park 9",
  available: false
}, {
  title: "Park 10",
  description: "Terminal 1",
  parkTitle: "P10",
  tooltip:"park 10",
  available: false
},
{
  title: "Park 11",
  description: "Terminal 1",
  parkTitle: "P11",
  tooltip:"park 11",
  available: false
}
  
];

const blocks = document.querySelectorAll('.block');
const popup = document.getElementById('Carda');
const titleElement = popup.querySelector('.title');
const descriptionElement = popup.querySelector('.description');
const parkTitleElement = popup.querySelector('.parkTitle');
const closeBtn = popup.querySelector('.close-btn');

blocks.forEach(block => {
  block.addEventListener('mouseenter' , function (event){
    const blockNum = parseInt(event.target.getAttribute('data-block'));
    const blockCard = blockData[blockNum];
    showPopup(blockCard.title, blockCard.description, blockCard.parkTitle);
  });
});

function showPopup(title, description, parkTitle){
  titleElement.textContent = title;
  descriptionElement.textContent = description;
  parkTitleElement.textContent = parkTitle;
  popup.style.bottom = '168px';
}

function hidePopup(){
  popup.style.bottom = '250px';
}

closeBtn.addEventListener('click', function () {
  hidePopup();
});

function showAvailableBlocks() {
  console.log("Available button clicked");
  blocks.forEach((block, index) => {
      const blockElement = document.querySelector(`#block_${index + 1}`);
      const blockStatus = blockData[index].available;

      if (blockStatus) {
          blockElement.querySelectorAll('.cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6').forEach(poly => {
              poly.style.fill = 'green';
          });
      }
  });
}

function showUnavailableBlocks() {
  console.log("Unavailable button clicked");
  blocks.forEach((block, index) => {
      const blockElement = document.querySelector(`#block_${index + 1}`);
      const blockStatus = blockData[index].available;

      if (!blockStatus) {
          blockElement.querySelectorAll('.cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6').forEach(poly => {
              poly.style.fill = 'red';
          });
      }
  });
}
function resetBlockColors() {
  console.log("Reset button clicked");
  blocks.forEach((block, index) => {
      const blockElement = document.querySelector(`#block_${index + 1}`);
      blockElement.querySelectorAll('.cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6').forEach(poly => {
          poly.style.fill = '';
      });
  });
}

function reserveParking() {
  const availableBlock = blockData.find(block => block.available);
  if (availableBlock) {
      
      alert(`Reserved parking space: ${availableBlock.title}`);
  } else {
      alert("No available parking spaces.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const svgBlocks = document.querySelectorAll(".block");

  svgBlocks.forEach((block, index) => {
    const blockInfo = blockData[index];

    tippy(`[data-block="${index}"]`, {  
      content: blockInfo.tooltip,
      placement: "top",
    });
  });
});