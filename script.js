var temp = 1;
        var store = [];
        var i = 1;
        var display_btn = document.querySelector('.red-btn');
        var chanceComplete = false;
        display_btn.style.display = "block";

        // path decide
        var red_path = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', 'red-home-1', 'red-home-2', 'red-home-3', 'red-home-4', 'red-home-5', 'center']

        var yellow_path = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', 'yellow-home-1', 'yellow-home-2', 'yellow-home-3', 'yellow-home-4', 'yellow-home-5', 'center']

        var blue_path = ['26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', 'blue-home-1', 'blue-home-2', 'blue-home-3', 'blue-home-4', 'blue-home-5', 'center']

        var green_path = ['39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', 'green-home-1', 'green-home-2', 'green-home-3', 'green-home-4', 'green-home-5', 'center']

        var r1 = r2 = r3 = r4 = y1 = y2 = y3 = y4 = g1 = g2 = g3 = g4 = b1 = b2 = b3 = b4 = 0; 
        var redToken = [r1, r2, r3, r4];
        var yellowTken = [y1, y2, y3, y4];
        var greenToken = [g1, g2, g3, g4];
        var blueToken = [b1, b2, b3, b4];
        var getToken = false;
        var tokenChance = false;

        let getRedSix = false, getYellowSix = false, getBlueSix = false, getGreenSix = false;
        var list_of_click_id = ['store1', 'store2', 'store3'];
        function dice(click, clicked, id, num){
            switch(id){
                    case 'red-value': show_btn = '.yellow-btn';
                        mask_btn =  '.red-btn';
                        show_store = '.red-store' + i;   
                        mask_store = '.red-store';
                        getSix = getRedSix;
                        get_id = id;
                        break;
                    case 'yellow-value': show_btn = '.blue-btn';
                        mask_btn =  '.yellow-btn'; 
                        show_store = '.yellow-store' + i; 
                        mask_store = '.yellow-store';
                        getSix = getYellowSix;
                        get_id = id;
                        break;
                    case 'blue-value': show_btn = '.green-btn';
                        mask_btn =  '.blue-btn'; 
                        show_store = '.blue-store' + i; 
                        mask_store = '.blue-store';
                        getSix = getBlueSix;
                        get_id = id;
                        break;
                    case 'green-value': show_btn = '.red-btn';
                        mask_btn =  '.green-btn'; 
                        show_store = '.green-store' + i; 
                        mask_store = '.green-store';
                        getSix = getGreenSix;
                        get_id = id;
                        break;
                }
            let display_btn = document.querySelector(show_btn);
            let hide_btn = document.querySelector(mask_btn);
            let stores = document.querySelector('.stores');
            let display_store = document.querySelector(show_store);
            let hide_store = document.querySelector(mask_store);
            if(click){
                let index = 0;
                if(chanceComplete){
                    let check_index = 0;
                    store_values_id = "#" + clicked;
                    store_value_hide = document.querySelector(store_values_id);
                    store_value_hide.style.display = "none";
                    clicked_value = (clicked.slice(-6, (clicked.length)));
                    while(check_index < list_of_click_id.length){
                        if(list_of_click_id[check_index] == clicked_value){
                            list_of_click_id.splice(check_index, 1);
                            getValue = store[check_index];
                            if(getSix){
                                let getFierstIdValue = get_id.slice(0, 1);
                                let get1 = getFierstIdValue + "1";
                                let get2 = getFierstIdValue + "2";
                                let get3 = getFierstIdValue + "3";
                                let get4 = getFierstIdValue + "4";

                                tokenChance = true;
                                console.log('bye');
                                if(document.getElementById(get1).addEventListener("click", function(){move(get_id, getValue, getSix, get1)}));

                                else if (document.getElementById(get2).addEventListener("click", function(){move(get_id, getValue, getSix, get2)}));

                                else if (document.getElementById(get3).addEventListener("click", function(){move(get_id, getValue, getSix, get3)}));

                                else if (document.getElementById(get4).addEventListener("click", function(){move(get_id, getValue, getSix, get4)}));
                            }
                            store.splice(check_index, 1);
                            break;
                        }
                        check_index += 1;
                    }
                    if(store.length == 0){
                        display_btn.style.display = "block";
                        list_of_click_id = ['store1', 'store2', 'store3'];
                    }
                }
                else{
                    alert("Firstly complete your chance ")
                }
                click = false;
            }
            else{
                let value = document.getElementById(id).innerHTML = num;
                let h1 = document.getElementById(id);
                let display_box;
                let display_value;
                chanceComplete = false;
                h1.style.display = "block";
                store.push(num);
                setTimeout(zoom_close, 1000, id);
                while(i <= temp){
                    let str = show_store;
                    display_box = document.querySelector(str);
                    display_value = mask_store + i + "-value";
                    display_value = document.querySelector(display_value);
                    display_box.style.display = 'block';
                    display_value.style.display = 'block';
                    display_value.innerHTML = store[i-1];
                    i += 1;
                }
                if(num == 6 && temp < 4){
                    if(id == 'red-value'){
                        getRedSix = true;
                    }
                    else if (id == 'yellow-value') {
                        getYellowSix = true;
                    } 
                    else if (id == 'blue-value') {
                        getBlueSix = true;
                    }
                    else if (id == 'green-value') {
                        getGreenSix = true;
                    }
                    console.log(temp);
                    if(temp == 3 && num == 6){
                        temp = 1;
                        i = 1;
                        display_btn.style.display = "block";
                        hide_btn.style.display = "none";
                        for(k = 1; k <= 3; k++){
                            masked_store = mask_store + k;
                            hide_icon = document.querySelector(masked_store)
                            hide_icon.style.display = "none";
                        }
                        store = [];
                    }
                    else{
                        temp++;
                        i = temp;
                        count--;
                    }     
                }
                else{
                    temp = 1; 
                    i = 1;
                    hide_btn.style.display = "none";
                    chanceComplete = true;
                    if(count==4){
                        count = 0;
                    }
                }
            }
            return 0;
        }
        var click = false;
        function hide_dice_value(clicked, click){
            click = true;
            dice(click, clicked);
        }
        function zoom_close(id){
            let h1 = document.getElementById(id);
            h1.style.display = "none";
        }
        function move(get_id, getValue, getSix, getTokenId){

            if(getSix){
                console.log('hey');
                if(tokenChance){
                    console.log(tokenChance)
                    if(get_id == 'red-value') {
                        if(getTokenId == 'r1'){
                            if(r1 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('r1');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(red_path[0]).innerHTML = '<div class="star color red-color" id="r1"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>';  
                                    tokenChance = false;
                                    r1 += 1;
                                }
                            }
                            else{
                                r1 += getValue;
                                token_id = document.getElementById('r1');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(red_path[r1-1]).innerHTML = '<div class="star color red-color" id="r1"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>';  
                                tokenChance = false;
                            }
                        }
                        else if(getTokenId == 'r2'){
                            if(r2 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('r2');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(red_path[0]).innerHTML = '<div class="star color red-color" id="r2"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>';
                                    tokenChance = false;
                                    r2 += 1;
                                }
                            }
                            else {
                                r2 += getValue;
                                token_id = document.getElementById('r2');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(red_path[r2-1]).innerHTML = '<div class="star color red-color" id="r2"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>';
                                tokenChance = false;
                            }
                        }
                        else if(getTokenId == 'r3'){
                            if(r3 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('r3');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(red_path[0]).innerHTML = '<div class="star color red-color" id="r3"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>';
                                    tokenChance = false;
                                    r3 += 1;
                                }
                            }
                            else{
                                r3 += getValue;
                                token_id = document.getElementById('r3');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(red_path[(r3 - 1)]).innerHTML = '<div class="star color red-color" id="r3"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>';
                                tokenChance = false;
                            }
                        }
                        else if(getTokenId == 'r4'){
                            if(r4 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('r4');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(red_path[0]).innerHTML = '<div class="star color red-color" id="r4"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>';
                                    tokenChance = false;
                                    r4 += 1;
                                }
                            }
                            else {
                                r4 += getValue;                       
                                token_id = document.getElementById('r4');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(red_path[(r4 - 1)]).innerHTML = '<div class="star color red-color" id="r4"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>';
                                tokenChance = false;
                            }
                        } 
                    }

                    else if(get_id == 'yellow-value') {
                        if(getTokenId == 'y1'){
                            if(y1 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('y1');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(yellow_path[1]).innerHTML = '<div class="star color yellow-color" id="y1"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                    tokenChance = false;
                                    y1 += 1;
                                }
                            }
                            else{
                                y1 += getValue;
                                token_id = document.getElementById('y1');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(yellow_path[y1]).innerHTML = '<div class="star color yellow-color" id="y1"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                tokenChance = false;
                            }
                        }
                        else if(getTokenId == 'y2'){
                            if(y2 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('y2');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(yellow_path[1]).innerHTML = '<div class="star color yellow-color" id="y2"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                    tokenChance = false;
                                    y2 += 1;
                                }
                            }
                            else{
                                y2 += getValue;
                                token_id = document.getElementById('y2');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(yellow_path[y2]).innerHTML = '<div class="star color yellow-color" id="y2"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                tokenChance = false;
                            }
                        }
                        else if(getTokenId == 'y3'){
                            if(y3 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('y3');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(yellow_path[1]).innerHTML = '<div class="star color yellow-color" id="y3"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                    tokenChance = false;
                                    y3 += 1;
                                }
                            }
                            else{
                                y3 += getValue;
                                token_id = document.getElementById('y3');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(yellow_path[y3]).innerHTML = '<div class="star color yellow-color" id="y3"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                tokenChance = false;
                            }
                        }
                        else if(getTokenId == 'y4'){
                            if(y4 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('y4');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(yellow_path[1]).innerHTML = '<div class="star color yellow-color" id="y4"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                    tokenChance = false;
                                    y4 += 1;
                                }
                            }
                            else{
                                y4 += getValue;
                                token_id = document.getElementById('y4');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(yellow_path[y4]).innerHTML = '<div class="star color yellow-color" id="y4"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                tokenChance = false;
                            }
                        } 
                    }    

                    else if(get_id == 'blue-value') {
                        if(getTokenId == 'b1'){
                            if(b1 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('b1');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(blue_path[1]).innerHTML = '<div class="star color blue-color" id="b1"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                    tokenChance = false;
                                    b1 += 1;
                                }
                            }
                            else{
                                b1 += getValue;
                                token_id = document.getElementById('b1');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(blue_path[b1]).innerHTML = '<div class="star color blue-color" id="b1"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                tokenChance = false;
                            }
                        }
                        else if(getTokenId == 'b2'){
                            if(b2 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('b2');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(blue_path[1]).innerHTML = '<div class="star color blue-color" id="b2"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                    tokenChance = false;
                                    b2 += 1;
                                }
                            }
                            else{
                                b2 += getValue;
                                token_id = document.getElementById('b2');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(blue_path[b2]).innerHTML = '<div class="star color blue-color" id="b2"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                tokenChance = false;
                            }
                        }
                        else if(getTokenId == 'b3'){
                            if(b3 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('b3');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(blue_path[1]).innerHTML = '<div class="star color blue-color" id="b3"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                    tokenChance = false;
                                    b3 += 1;
                                }
                            }
                            else{
                                b3 += getValue;
                                token_id = document.getElementById('b3');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(blue_path[b3]).innerHTML = '<div class="star color blue-color" id="b3"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                tokenChance = false;
                            }
                        }
                        else if(getTokenId == 'b4'){
                            if(b4 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('b4');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(blue_path[1]).innerHTML = '<div class="star color blue-color" id="b4"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                    tokenChance = false;
                                    b4 += 1;
                                }
                            }
                            else{
                                b4 += getValue;
                                token_id = document.getElementById('b4');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(blue_path[b4]).innerHTML = '<div class="star color blue-color" id="b4"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                tokenChance = false;
                            }
                        } 
                    } 

                    else if(get_id == 'green-value') {
                        if(getTokenId == 'g1'){
                            if(g1 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('g1');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(green_path[1]).innerHTML = '<div class="star color green-color" id="g1"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                    tokenChance = false;
                                    g1 += 1;
                                }
                            }
                            else{
                                g1 += getValue;
                                token_id = document.getElementById('g1');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(green_path[g1]).innerHTML = '<div class="star color green-color" id="g1"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                tokenChance = false;
                            }
                        }
                        else if(getTokenId == 'g2'){
                            if(g2 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('g2');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(green_path[1]).innerHTML = '<div class="star color green-color" id="g2"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                    tokenChance = false;
                                    g2 += 1;
                                }
                            }
                            else{
                                g2 += getValue;
                                token_id = document.getElementById('g2');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(green_path[g2]).innerHTML = '<div class="star color green-color" id="g2"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                tokenChance = false;
                            }
                        }
                        else if(getTokenId == 'g3'){
                            if(g3 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('g3');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(green_path[1]).innerHTML = '<div class="star color green-color" id="g3"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                    tokenChance = false;
                                    g3 += 1;
                                }
                            }
                            else{
                                g3 += getValue;
                                token_id = document.getElementById('g3');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(green_path[g3]).innerHTML = '<div class="star color green-color" id="g3"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                tokenChance = false;
                            }
                        }
                        else if(getTokenId == 'g4'){
                            if(g4 == 0){
                                if(getValue == 6){
                                    token_id = document.getElementById('g4');
                                    token_id.parentNode.innerHTML = '';
                                    document.getElementById(green_path[1]).innerHTML = '<div class="star color green-color" id="g4"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                    tokenChance = false;
                                    g4 += 1;
                                }
                            }
                            else{
                                g4 += getValue;
                                token_id = document.getElementById('g4');
                                token_id.parentNode.innerHTML = '';
                                document.getElementById(green_path[g4]).innerHTML = '<div class="star color green-color" id="g4"><i class="fa fa-snowflake-o" aria-hidden="true"></i></div>'; 
                                tokenChance = false;
                            }
                        } 
                    } 
                }       
            }
            
        }
        function red(){ 
            let num = Math.floor(Math.random() * 6) + 1;
            dice(click, '', 'red-value', num);
        }
        function green(){
            let num = Math.floor(Math.random() *6)+ 1;
            dice(click, '', 'green-value', num);
        }
        function yellow(){
            let num = Math.floor(Math.random() * 6) + 1;
            dice(click, '', 'yellow-value', num);
        }
        function blue(){
            let num = Math.floor(Math.random() * 6) + 1;
            dice(click, '', 'blue-value', num);
        }

        var count = 1;
        function getChance(chance){
            if(count == chance){
                switch(chance){
                    case 1: red();
                        count++;
                        break;
                    case 2: yellow();
                        count++;
                        break;
                    case 3: blue();
                        count++;
                        break;
                    case 4: green();
                        count++;
                        break;
                }
            }
            else{
                switch(count){
                    case 1:
                        alert("This chance is for red.\nPlease wait for your chance");
                        break;
                    case 2:
                    alert("This chance is for yellow.\nPlease wait for your chance");
                        break;
                    case 3:
                    alert("This chance is for blue.\nPlease wait for your chance");
                        break;
                    case 4:
                    alert("This chance is for green.\nPlease wait for your chance");
                        break;
                }
            }
            

        }