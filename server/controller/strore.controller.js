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
      message: "Data stored successfully",
      data: newData
    });
  } catch (e) {
    console.error("Error storing data:", e);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const GetData = async (req, res) => {
  try {
    console.log("Fetching data...");
    
    const allData = await Store.find(); // Fetch all documents

    return res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: allData
    });
  } catch (e) {
    console.error("Error fetching data:", e);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
