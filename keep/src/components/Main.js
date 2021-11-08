"use strict";
import React from 'react';
import FormTaskItem from './FormTaskItem.js';
import TaskItemContainer from './TaskItemContainer.js';


class Main extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    icoTrash = () => <svg className="ico-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" ></path></svg>;
    icoEdit = () => <svg className="ico-edit" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" ></path></svg>;
    icoBell = () => <svg className="ico-bell" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" ></path></svg>;
    icoPin = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbtack" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" ><path fill="currentColor" d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z" ></path></svg>;
    icoPlus = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" ></path></svg>;
    icoSave = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="save" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z" ></path></svg>


    forTaskListschild = () => {
        let tasklistitem = [];
        var i = 0;
        let listtask = this.props.TaskListsItemsSort;
        let length = 0;

        switch (true) {
            case listtask.length >= 4: length = 4; break;
            case listtask.length >= 3: length = 3; break;
            case listtask.length >= 2: length = 2; break;
            case listtask.length >= 1: length = 1; break;
        }

        for (let i = 1; i <= length; i++) {
            let keyitem = listtask[listtask.length - i].key;
            let keychapter = listtask[listtask.length - i].keychapter;
            tasklistitem.push(
                <TaskItemContainer data={listtask[listtask.length - i]} keychapter={keychapter} keyitem={keyitem} key={keyitem} index={i}
                    attrdata={this.props.locationPathname !== undefined ? this.props.locationPathname : "all"}
                />
            )
        }

        return tasklistitem;
    }

    forPinTaskListschild = () => {
        let tasklistitem = [];
        let listtask = [];
        if (this.props.TaskListsItemsSort.length) this.props.TaskListsItemsSort.forEach(function (el, index, array) { el.pin === true && listtask.push(el) });
        let length = 0;

        switch (true) {
            case listtask.length >= 4: length = 4; break;
            case listtask.length >= 3: length = 3; break;
            case listtask.length >= 2: length = 2; break;
            case listtask.length >= 1: length = 1; break;
        }

        for (let i = 1; i <= length; i++) {
            let keyitem = listtask[listtask.length - i].key;
            let keychapter = listtask[listtask.length - i].keychapter;
            tasklistitem.push(
                <TaskItemContainer data={listtask[listtask.length - i]} keychapter={keychapter} keyitem={keyitem} key={keyitem} index={i}
                    attrdata={this.props.locationPathname !== undefined ? this.props.locationPathname : "all"}
                />
            )
        }
        return tasklistitem;
    }


    render() {
        console.log("render Main");
        return (
            <React.Fragment>
                <div className="task-chapter task-chapter--main" >
                    <style>
                        {` .task-item{ -webkit-animation-name: none;
                                animation-name: none;} 
                            .${this.props.locationPathname !== undefined ? this.props.locationPathname : "all"} { 
                                -webkit-animation-name: slideInUp;
                                animation-name: slideInUp;
                                opacity: 0; }
                            `
                        }
                    </style>
                    <div className="task-chapter__header">
                        <div className="task-chapter__title">
                            Последние задачи
                        </div>
                    </div>
                    <div className="task-item-list">
                        {this.forTaskListschild()}
                    </div>
                    <div className="task-chapter__header">
                        <div className="task-chapter__title">
                            Закрепленные задачи
                        </div>
                    </div>
                    <div className="task-item-list">
                        {this.forPinTaskListschild()}
                    </div>
                    <div className="task-chapter__header">
                        <div className="task-chapter__title">
                            Записная книжка
                        </div>
                    </div>
                    <div className="book" style={{ "animationDelay": `1s` }}>
                        <div className="book__title">Записная книжка <span className="book__save" onClick={this.saveBook}> {this.icoSave()} </span></div>
                        {console.log("Записная книжка")}
                        {this.props.Book !== undefined && <textarea className="book__text" ref={this.props.cbsetNewTextRef} defaultValue={this.props.Book !== undefined && this.props.Book.text} placeholder="Запишите что-нибудь"></textarea>}
                    </div>

                </div>
                <FormTaskItem />
            </React.Fragment>

        );
    }


}

export default Main;
