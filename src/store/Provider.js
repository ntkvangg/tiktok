import { useReducer } from "react";
import Context from "./Context";
import reducer, {initialState} from "./Reducer";

/*
    This is the Provider component. It is a wrapper component that will wrap the entire application.
    #Redux vs React-context
    1. Context API can't instead of Redux. Redux is a state management library. 
    Context API is a feature of React that allows you to share data between components without having to use props.
    2. Redux dễ dàng triển khai phát triển hơn. Redux nó có thư viện redux devtool để debug. Giúp dễ dàng quan sát từng state thay đổi
    3. Hook thì k làm được điều đó
    4. Redux có Middleware, Context API thì k có
    5. Redux có addons
    6. Redux là cross-platform, cross-framework Context API thì k phải
    7. Redux dễ dàng cấu hình và performamce tốt hơn
    8. Redux nó đã xử lý là component nào có state thay đổi thì nó sẽ chỉ re-render component đó thôi
    9. Context API thì nó sẽ re-render tất cả các component có sử dụng context đó và nên sử dụng nó cho sự án nhỏ và ít sử dụng global state
    
*/


const Provider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;