import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { fetchEUR, fetchUSD, fetchPLN } from "./redux/actions/valutes";

function App() {
  const [valueUSD, setValueUSD] = useState("");
  const [valueEURO, setValueEURO] = useState("");
  const [valuePLN, setValuePLN] = useState("");

  const store = useSelector(({ shop }) => shop);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEUR());
    dispatch(fetchPLN());
    dispatch(fetchUSD());
  }, []);
  return (
    <div className="App mx-auto grid gap-[20px] justify-center mt-[50px]">
      <Tabs>
        <TabList className="flex gap-[15px] mb-[20px]">
          <Tab className="border p-[5px] cursor-pointer">UAH TO PLN</Tab>
          <Tab className="border p-[5px] cursor-pointer">UAH TO EURO</Tab>
          <Tab className="border p-[5px] cursor-pointer">UAH TO USD</Tab>
        </TabList>

        <TabPanel>
          {store.loading ? (
            <div className="w-[400px] flex justify-between">
              <label htmlFor="uah-pln">UAH</label>
              <input
                type="number"
                id="uah-pln"
                className="border"
                value={valuePLN}
                onChange={(e) => {
                  setValuePLN(e.target.value);
                }}
              />
              <label htmlFor="Pln">Pln</label>
              <input
                readOnly
                id="pln"
                value={store.pln * valuePLN}
                className="border"
              />
            </div>
          ) : (
            "Loading"
          )}
        </TabPanel>
        <TabPanel>
          {store.loading ? (
            <div className="w-[400px] flex justify-between">
              <label htmlFor="uah-euro">UAH</label>
              <input
                type="number"
                id="uah-euro"
                className="border"
                value={valueEURO}
                onChange={(e) => {
                  setValueEURO(e.target.value);
                }}
              />
              <label htmlFor="euro">Euro</label>
              <input
                readOnly
                id="euro"
                value={store.eur * valueEURO}
                className="border"
              />
            </div>
          ) : (
            "Loading"
          )}
        </TabPanel>
        <TabPanel>
          {store.loading ? (
            <div className="w-[400px] flex justify-between">
              <label htmlFor="uah-usd">UAH</label>
              <input
                type="number"
                id="uah-usd"
                className="border"
                value={valueUSD}
                onChange={(e) => {
                  setValueUSD(e.target.value);
                }}
              />
              <label htmlFor="usd">USD</label>
              <input
                id="usd"
                readOnly
                value={store.usd * valueUSD}
                className="border"
              />
            </div>
          ) : (
            "Loading"
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
