import Store from "../schema/store.schema.js";

export const StoreData = async (req, res) => {
  try {
    console.log("1")
    const { name, rollNo } = req.body;
console.log("1")
    const newData = new Store({ name, rollNo });
    await newData.save();
console.log("1")
    return res.status(201).json({
      success: true,
      message: "Data stored successfully"
    });
  } catch (e) {
    console.error("Error storing data:", e);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
