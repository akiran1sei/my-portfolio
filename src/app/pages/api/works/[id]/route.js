// import useSWR from "swr";

//   const { data, error } = useSWR(`/pages/api/`, fetcher, {
//     initial: true, // 初回レンダリング時に必ず更新
//     onBackgroundUpdate: true, // バックグラウンドで再読み込み
//     revalidateOnMount: true, // マウント時に再検証
//     revalidateOnReconnect: true, // 再接続時に再検証
//   });
//   if (error) return <div>エラーが発生しました。</div>;
//   if (!data) return <div>データを取得中...</div>;

// const fetcher = async (url) => {
//   const response = await fetch(url);
//   return response.json();
// };
