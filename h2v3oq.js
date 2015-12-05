 function h2v3oq(pname, px, py, pmap) {
        $("body").trigger({
          type: "refreshmap",
          name: pname,
          walk: moveFunction(px,py,map)
        });
      }
    var moveFunction = function(px,py,pmap){
        var arr = [];
		
        if (pmap[py + 1][px] == 1)
            arr.push(2);

        if (pmap[py][px + 1] == 1)
            arr.push(3);

        if (pmap[py][px - 1] == 1)
            arr.push(1);

        if (pmap[py - 1][px] == 1)
            arr.push(0);

        if (arr.length == 0)
        {
            if (pmap[py + 1][px] == 0)
                arr.push(2);

            else if (pmap[py][px + 1] == 0)
                arr.push(3);

            else if (pmap[py][px - 1] == 0)
                arr.push(1);
            
            else if (pmap[py - 1][px] == 0)
                arr.push(0);
            
            if (
				(pmap[py + 1][px] == 9 && pmap[py][px + 1] == 9) || 
				(pmap[py - 1][px] == 9 && pmap[py][px + 1] == 9) || 
				(pmap[py][px - 1] == 9 && pmap[py - 1][px] == 9) || 
				(pmap[py + 1][px] == 9 && pmap[py][px - 1] == 9)
				)
            {
                return Math.floor(Math.random() * 4);
            }
			else
				return Math.floor(Math.random() * 4);
				
            var r1 = Math.floor(Math.random() * arr.length);
            return arr[r1];
        }
        else
        {
            var r = Math.floor(Math.random() * arr.length);
            return arr[r];
        }


    }