import React,{ useState, useEffect, useRef} from 'react';

const Dropdown = ({label,options, selected ,onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click', onBodyClick, { capture: true });

        // 原本:設定點擊其他地方時 關閉下拉
        // document.body.addEventListener('click',(event) => {
        //     if(ref.current.contains(event.target)){
        //         return;
        //     }
        //     setOpen(false);
        // });

        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true });
        };
    }, []);

    const renderOptions = options.map((option) => {

        // 當選項被選擇時，不出現在list裡面
        if (option.value === selected.value) {
            return null;
        };

        return(
            <div 
                key={option.value} 
                className='item'
                onClick={() => {
                    onSelectedChange(option)}}
            >
                {option.label}
            </div>
        );
    });

    return(
        <div ref={ref} className='ui form'>
             <div className='field'>
                 <label className='label'>{label}</label>
                 <div 
                    // 設定click時，open會true|false   
                    onClick={()=> {
                        setOpen(!open)}}
                    // 設定當open是true的時候 有visible
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                     <i className='dropdown icon'></i>
                     <div className='text'>{selected.label}</div>
                     <div className={`menu ${open ? 'visible transition' : ''}`}>
                         {renderOptions}
                     </div>
                 </div>
             </div>
        </div>
    );
};
export default Dropdown;