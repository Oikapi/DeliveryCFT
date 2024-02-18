import HistoryElem from "./HistoryElem"
import "./historyPage.css"

const HistoryPage = () => {
    return (
        <div className='container'>
            <div className='history-container'>
                <div className="history-header">
                    <span>Номер заказа</span>
                    <span>Статус</span>
                    <span>Адрес доставки</span>
                    <span>Тип доставки</span>
                </div>
                <HistoryElem />
                <HistoryElem />
                <HistoryElem />
            </div>
        </div>
    )
}

export default HistoryPage