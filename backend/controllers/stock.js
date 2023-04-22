const { cloudinary } = require("./cloudinary");

exports.stock_data = (req, res) => {
  const { stockname, start_date, end_date } = req.body;
  const dir =
    "stocks/" + stockname + "." + start_date + "." + end_date + "/stock_data";
  cloudinary.api.resources(
    { resource_type: "image", max_results: 500 },
    function (error, result) {
      if (error) {
        return res.send({ error: "Something went wrong. Try again later" });
      }
      var current = [];
      for (var i = 0; i < result.resources.length; i++) {
        if (result.resources[i]["folder"] === dir) {
          current.push(result.resources[i]["url"]);
        }
      }
      var ans = [
        { name: "Model Train Vs Validation Loss", url: "" },
        { name: "LSTM Training", url: "" },
        { name: "LSTM Validation", url: "" },
        { name: "LSTM Training And Validation", url: "" },
      ];
      for (var i = 0; i < 4; i++) {
        const cur_name = ans[i]["name"];
        var name = "",
          j = 0;
        while (j < cur_name.length) {
          if (cur_name[j] != " ") name += cur_name[j];
          j++;
        }
        var cur_url = "";
        j = 0;
        while (j < 4) {
          if (current[j].includes(name)) {
            ans[i]["url"] = current[j];
            break;
          }
          j++;
        }
      }
      return res.send(ans);
    }
  );
};

exports.twitter_sentiments = (req, res) => {
  const { stockname, start_date, end_date } = req.body;
  const dir =
    "stocks/" +
    stockname +
    "." +
    start_date +
    "." +
    end_date +
    "/twitter_sentiments";
  cloudinary.api.resources(
    { resource_type: "image", max_results: 500 },
    function (error, result) {
      if (error) {
        return res.send({ error: "Something went wrong. Try again later" });
      }
      var current = [];
      for (var i = 0; i < result.resources.length; i++) {
        if (result.resources[i]["folder"] === dir) {
          current.push(result.resources[i]["url"]);
        }
      }
      var ans = [
        { name: "Model Train Vs Validation Loss", url: "" },
        { name: "LSTM Training", url: "" },
        { name: "LSTM Validation", url: "" },
        { name: "LSTM Training And Validation", url: "" },
      ];
      for (var i = 0; i < 4; i++) {
        const cur_name = ans[i]["name"];
        var name = "",
          j = 0;
        while (j < cur_name.length) {
          if (cur_name[j] != " ") name += cur_name[j];
          j++;
        }
        var cur_url = "";
        j = 0;
        while (j < 4) {
          if (current[j].includes(name)) {
            ans[i]["url"] = current[j];
            break;
          }
          j++;
        }
      }
      return res.send(ans);
    }
  );
};

exports.stock_data_and_twitter_sentiments = (req, res) => {
  const { stockname, start_date, end_date } = req.body;
  const dir =
    "stocks/" +
    stockname +
    "." +
    start_date +
    "." +
    end_date +
    "/stock_data_and_twitter_sentiments";
  cloudinary.api.resources(
    { resource_type: "image", max_results: 500 },
    function (error, result) {
      if (error) {
        return res.send({ error: "Something went wrong. Try again later" });
      }
      var current = [];
      for (var i = 0; i < result.resources.length; i++) {
        if (result.resources[i]["folder"] === dir) {
          current.push(result.resources[i]["url"]);
        }
      }
      var ans = [
        { name: "Model Train Vs Validation Loss", url: "" },
        { name: "LSTM Training", url: "" },
        { name: "LSTM Validation", url: "" },
        { name: "LSTM Training And Validation", url: "" },
      ];
      for (var i = 0; i < 4; i++) {
        const cur_name = ans[i]["name"];
        var name = "",
          j = 0;
        while (j < cur_name.length) {
          if (cur_name[j] != " ") name += cur_name[j];
          j++;
        }
        var cur_url = "";
        j = 0;
        while (j < 4) {
          if (current[j].includes(name)) {
            ans[i]["url"] = current[j];
            break;
          }
          j++;
        }
      }
      return res.send(ans);
    }
  );
};

exports.testing_results = (req, res) => {
  const { stockname, start_date, end_date } = req.body;
  const dir =
    "stocks/" +
    stockname +
    "." +
    start_date +
    "." +
    end_date +
    "/testing_results";
  cloudinary.api.resources(
    { resource_type: "image", max_results: 500 },
    function (error, result) {
      if (error) {
        return res.send({ error: "Something went wrong. Try again later" });
      }
      var current = [];
      for (var i = 0; i < result.resources.length; i++) {
        if (result.resources[i]["folder"] === dir) {
          current.push(result.resources[i]["url"]);
        }
      }
      var ans = [{ name: "Testing Results", url: current[0] }];

      return res.send(ans);
    }
  );
};
