import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getQuestionService, setQuestionService, updateQuestionService } from "../services/questionServices";

export const setQuestionAsync = createAsyncThunk(
    'question/setQuestionAsync',
    async data => {
        const res = await setQuestionService(data);
        return res;
    }
)

export const getQuestionAsync = createAsyncThunk(
    'question/getQuestionAsync',
    async () => {
        const res = await getQuestionService();
        return res; 
    }
)

export const updateQuestionAsync = createAsyncThunk(
    'question/updateQuestionAsync',
    async (data) => {
        const res = await updateQuestionService(data);

        if(res.status) {
            const resList = await getQuestionService();
            return resList; 
        }
        else {
            return res;
        }

    }
)

const initialState = {
    list: [],
    loading: false,
    message: '',
    error: ''
}

export const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        clearNotification: state => {
            state.error = '';
            state.message = '';
        }
    },
    extraReducers: builder => {
        builder
            .addCase(setQuestionAsync.pending, state => {
                state.loading = true;
            })
            .addCase(setQuestionAsync.fulfilled, (state, action) => {
                if(action.payload.status) {
                    state.message = "Kayıt işlemi gerçekleşti.";
                    state.error = '';
                }
                else {
                    state.error = "İşleminiz gerçekleşemedi";
                    state.message = '';
                }
                state.loading = false;
            });

        builder
            .addCase(getQuestionAsync.pending, state => {
                state.loading = true;
            })
            .addCase(getQuestionAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload.data.data;
            });


        builder
            .addCase(updateQuestionAsync.pending, state => {
                state.loading = true;
            })
            .addCase(updateQuestionAsync.fulfilled, (state, action) => {
                state.loading = false;
                if(action.payload.status) {
                    state.list = action.payload.data.data;
                    state.message = "Güncelleme işlemi gerçekleşti.";
                    state.error = '';
                }
                else {
                    state.error = "İşleminiz gerçekleşemedi";
                    state.message = '';
                }
            });
    }
});

export const { clearNotification } = questionSlice.actions;
export default questionSlice.reducer;