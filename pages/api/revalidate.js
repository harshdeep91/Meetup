export default async function handler(req, res) {

      await res.unstable_revalidate('/');
    //   console.log("done");
      return res.json({ revalidated: true });
  }