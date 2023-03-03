var counter=1;
function send_notification(hitapps)
{
    for(var i =0;i<hitapps.length;i++)
    {
        if(hitapps[0][i].search("EntityCuration")!=-1 && counter===1){
            console.log("Hitapp Found")
            var xhr = new XMLHttpRequest();
            var url = 'https://api.telegram.org/bot5629151594:AAHgc2VXouHwMHjo_lfLsgAJp1JXgnEuU3U/sendMessage?';
            xhr.open("POST", url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('cache-control', 'no-cache');
            xhr.send(JSON.stringify({
                "chat_id": "@hittappbot",
                //"chat_type": "private",
                "parse_mode": "markdown",
                "text": hitapps[0][i]
            }));
            counter = 0;
        }
    }
}

chrome.tabs.query({active: true}, function(tabs){
    var tab = tabs[0];
    async function executeScr(){
        await timer(10000);
    }

async function main() {

    while(true){
    chrome.tabs.executeScript(tab.id,{send_notification})
        {
        code:
            document.location.reload(true)
            var temp = document.getElementsByClassName("tasks-as-list__row__cell tasks-as-list__row__cell--task")
            var temp2 = document.querySelectorAll("span.tasks-as-list__row__cell__task-name")
            var temp_arr = []
            for( var i = 0;i<temp.length-1;i++){
                console.log(temp2[i].textContent)
                temp_arr.push(temp2[i].textContent)
            }
            temp_arr
    }

    await executeScr();
}
}
main();

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }
});