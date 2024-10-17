import { useAppSelector } from './store/store'

export default function Child() {
    const count = useAppSelector((state) => state.cart.items.length)
    return (
        <>
            <h1>Child Component</h1>
            <div className="card">
                <p>
                    Count is {count}
                </p>
            </div>
        </>
    )
}
