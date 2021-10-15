export let newproduct = {};
export let filderror = { name: null, balans: null };

export default function Editfieldtest(field, val, e) {
    debugger;
    var fieldval;
    if (e) {
        e.stopPropagation();
        fieldval = e.targe.value
    }
    if (val) fieldval = val;


    if (fieldval) {

        switch (field) {
            case "name":
                var str = fieldval;
                var patt = new RegExp(/^\D+$/);
                var res = patt.test(str);
                break;
            case "balans":
                var str = fieldval;
                var patt = new RegExp(/^[0-9]+$/);
                var res = patt.test(str);
                break;
            case "quality":
                var str = fieldval;
                var patt = new RegExp(/^[0-9]+$/);
                var res = patt.test(str);
                break;
        }
        if (res) {

            let newprevProduct = { ...newproduct };
            newprevProduct[field] = fieldval;
            newproduct = newprevProduct;



            let newprevFilderror = { ...filderror };
            newprevFilderror[field] = false;
            filderror = newprevFilderror;

        }
        else {
            let newprevFilderror = { ...filderror };
            newprevFilderror[field] = true;
            filderror = newprevFilderror;
        }
    }
    else {
        let newprevFilderror = { ...filderror };
        newprevFilderror[field] = true;
        filderror = newprevFilderror;
    }
}