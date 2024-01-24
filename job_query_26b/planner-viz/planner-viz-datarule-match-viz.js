var data = {
  "steps":[ {
    "id":"INITIAL",
    "updates":{
      "set-0":{
        "label":"set-0",
        "kind":"set"
      },
      "51":{
        "label":"subset#51-set#0-\nNONE",
        "explanation":"{subset=rel#51:RelSubset#0.NONE}",
        "set":"set-0",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "1" ]
      },
      "1":{
        "label":"#1-LogicalTableScan",
        "explanation":"{table=[complete_cast]}",
        "set":"set-0",
        "cost":"{inf}"
      },
      "set-1":{
        "label":"set-1",
        "kind":"set"
      },
      "52":{
        "label":"subset#52-set#1-\nNONE",
        "explanation":"{subset=rel#52:RelSubset#1.NONE}",
        "set":"set-1",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "3" ]
      },
      "3":{
        "label":"#3-LogicalTableScan",
        "explanation":"{table=[comp_cast_type]}",
        "set":"set-1",
        "cost":"{inf}"
      },
      "set-2":{
        "label":"set-2",
        "kind":"set"
      },
      "54":{
        "label":"subset#54-set#2-\nNONE",
        "explanation":"{subset=rel#54:RelSubset#2.NONE}",
        "set":"set-2",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "53" ]
      },
      "53":{
        "label":"#53-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-2",
        "cost":"{inf}",
        "inputs":[ "51", "52" ]
      },
      "set-3":{
        "label":"set-3",
        "kind":"set"
      },
      "56":{
        "label":"subset#56-set#3-\nNONE",
        "explanation":"{subset=rel#56:RelSubset#3.NONE}",
        "set":"set-3",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "55" ]
      },
      "55":{
        "label":"#55-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-3",
        "cost":"{inf}",
        "inputs":[ "54", "52" ]
      },
      "set-4":{
        "label":"set-4",
        "kind":"set"
      },
      "57":{
        "label":"subset#57-set#4-\nNONE",
        "explanation":"{subset=rel#57:RelSubset#4.NONE}",
        "set":"set-4",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "11" ]
      },
      "11":{
        "label":"#11-LogicalTableScan",
        "explanation":"{table=[char_name]}",
        "set":"set-4",
        "cost":"{inf}"
      },
      "set-5":{
        "label":"set-5",
        "kind":"set"
      },
      "59":{
        "label":"subset#59-set#5-\nNONE",
        "explanation":"{subset=rel#59:RelSubset#5.NONE}",
        "set":"set-5",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "58" ]
      },
      "58":{
        "label":"#58-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-5",
        "cost":"{inf}",
        "inputs":[ "56", "57" ]
      },
      "set-6":{
        "label":"set-6",
        "kind":"set"
      },
      "60":{
        "label":"subset#60-set#6-\nNONE",
        "explanation":"{subset=rel#60:RelSubset#6.NONE}",
        "set":"set-6",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "15" ]
      },
      "15":{
        "label":"#15-LogicalTableScan",
        "explanation":"{table=[cast_info]}",
        "set":"set-6",
        "cost":"{inf}"
      },
      "set-7":{
        "label":"set-7",
        "kind":"set"
      },
      "62":{
        "label":"subset#62-set#7-\nNONE",
        "explanation":"{subset=rel#62:RelSubset#7.NONE}",
        "set":"set-7",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "61" ]
      },
      "61":{
        "label":"#61-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-7",
        "cost":"{inf}",
        "inputs":[ "59", "60" ]
      },
      "set-8":{
        "label":"set-8",
        "kind":"set"
      },
      "63":{
        "label":"subset#63-set#8-\nNONE",
        "explanation":"{subset=rel#63:RelSubset#8.NONE}",
        "set":"set-8",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "19" ]
      },
      "19":{
        "label":"#19-LogicalTableScan",
        "explanation":"{table=[info_type]}",
        "set":"set-8",
        "cost":"{inf}"
      },
      "set-9":{
        "label":"set-9",
        "kind":"set"
      },
      "65":{
        "label":"subset#65-set#9-\nNONE",
        "explanation":"{subset=rel#65:RelSubset#9.NONE}",
        "set":"set-9",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "64" ]
      },
      "64":{
        "label":"#64-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-9",
        "cost":"{inf}",
        "inputs":[ "62", "63" ]
      },
      "set-10":{
        "label":"set-10",
        "kind":"set"
      },
      "66":{
        "label":"subset#66-set#10-\nNONE",
        "explanation":"{subset=rel#66:RelSubset#10.NONE}",
        "set":"set-10",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "23" ]
      },
      "23":{
        "label":"#23-LogicalTableScan",
        "explanation":"{table=[keyword]}",
        "set":"set-10",
        "cost":"{inf}"
      },
      "set-11":{
        "label":"set-11",
        "kind":"set"
      },
      "68":{
        "label":"subset#68-set#11-\nNONE",
        "explanation":"{subset=rel#68:RelSubset#11.NONE}",
        "set":"set-11",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "67" ]
      },
      "67":{
        "label":"#67-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-11",
        "cost":"{inf}",
        "inputs":[ "65", "66" ]
      },
      "set-12":{
        "label":"set-12",
        "kind":"set"
      },
      "69":{
        "label":"subset#69-set#12-\nNONE",
        "explanation":"{subset=rel#69:RelSubset#12.NONE}",
        "set":"set-12",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "27" ]
      },
      "27":{
        "label":"#27-LogicalTableScan",
        "explanation":"{table=[kind_type]}",
        "set":"set-12",
        "cost":"{inf}"
      },
      "set-13":{
        "label":"set-13",
        "kind":"set"
      },
      "71":{
        "label":"subset#71-set#13-\nNONE",
        "explanation":"{subset=rel#71:RelSubset#13.NONE}",
        "set":"set-13",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "70" ]
      },
      "70":{
        "label":"#70-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-13",
        "cost":"{inf}",
        "inputs":[ "68", "69" ]
      },
      "set-14":{
        "label":"set-14",
        "kind":"set"
      },
      "72":{
        "label":"subset#72-set#14-\nNONE",
        "explanation":"{subset=rel#72:RelSubset#14.NONE}",
        "set":"set-14",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "31" ]
      },
      "31":{
        "label":"#31-LogicalTableScan",
        "explanation":"{table=[movie_info_idx]}",
        "set":"set-14",
        "cost":"{inf}"
      },
      "set-15":{
        "label":"set-15",
        "kind":"set"
      },
      "74":{
        "label":"subset#74-set#15-\nNONE",
        "explanation":"{subset=rel#74:RelSubset#15.NONE}",
        "set":"set-15",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "73" ]
      },
      "73":{
        "label":"#73-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-15",
        "cost":"{inf}",
        "inputs":[ "71", "72" ]
      },
      "set-16":{
        "label":"set-16",
        "kind":"set"
      },
      "75":{
        "label":"subset#75-set#16-\nNONE",
        "explanation":"{subset=rel#75:RelSubset#16.NONE}",
        "set":"set-16",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "35" ]
      },
      "35":{
        "label":"#35-LogicalTableScan",
        "explanation":"{table=[movie_keyword]}",
        "set":"set-16",
        "cost":"{inf}"
      },
      "set-17":{
        "label":"set-17",
        "kind":"set"
      },
      "77":{
        "label":"subset#77-set#17-\nNONE",
        "explanation":"{subset=rel#77:RelSubset#17.NONE}",
        "set":"set-17",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "76" ]
      },
      "76":{
        "label":"#76-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-17",
        "cost":"{inf}",
        "inputs":[ "74", "75" ]
      },
      "set-18":{
        "label":"set-18",
        "kind":"set"
      },
      "78":{
        "label":"subset#78-set#18-\nNONE",
        "explanation":"{subset=rel#78:RelSubset#18.NONE}",
        "set":"set-18",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "39" ]
      },
      "39":{
        "label":"#39-LogicalTableScan",
        "explanation":"{table=[name]}",
        "set":"set-18",
        "cost":"{inf}"
      },
      "set-19":{
        "label":"set-19",
        "kind":"set"
      },
      "80":{
        "label":"subset#80-set#19-\nNONE",
        "explanation":"{subset=rel#80:RelSubset#19.NONE}",
        "set":"set-19",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "79" ]
      },
      "79":{
        "label":"#79-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-19",
        "cost":"{inf}",
        "inputs":[ "77", "78" ]
      },
      "set-20":{
        "label":"set-20",
        "kind":"set"
      },
      "81":{
        "label":"subset#81-set#20-\nNONE",
        "explanation":"{subset=rel#81:RelSubset#20.NONE}",
        "set":"set-20",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "43" ]
      },
      "43":{
        "label":"#43-LogicalTableScan",
        "explanation":"{table=[title]}",
        "set":"set-20",
        "cost":"{inf}"
      },
      "set-21":{
        "label":"set-21",
        "kind":"set"
      },
      "83":{
        "label":"subset#83-set#21-\nNONE",
        "explanation":"{subset=rel#83:RelSubset#21.NONE}",
        "set":"set-21",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "82" ]
      },
      "82":{
        "label":"#82-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-21",
        "cost":"{inf}",
        "inputs":[ "80", "81" ]
      },
      "set-22":{
        "label":"set-22",
        "kind":"set"
      },
      "85":{
        "label":"subset#85-set#22-\nNONE",
        "explanation":"{subset=rel#85:RelSubset#22.NONE}",
        "set":"set-22",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "84" ]
      },
      "84":{
        "label":"#84-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), IS NOT NULL($10), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), OR(=($25, 'superhero'), =($25, 'marvel-comics'), =($25, 'based-on-comic'), =($25, 'fight')), =($28, 'movie'), >($32, '8.0'), >($48, 2005), =($27, $47), =($46, $35), =($46, $16), =($46, $1), =($46, $30), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($37, $15), =($24, $36), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-22",
        "cost":"{inf}",
        "inputs":[ "83" ]
      },
      "set-23":{
        "label":"set-23",
        "kind":"set"
      },
      "87":{
        "label":"subset#87-set#23-\nNONE",
        "explanation":"{subset=rel#87:RelSubset#23.NONE}",
        "set":"set-23",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "86" ]
      },
      "86":{
        "label":"#86-LogicalProject",
        "explanation":"{name=$10, info0=$32, title=$53}",
        "set":"set-23",
        "cost":"{inf}",
        "inputs":[ "85" ]
      },
      "set-24":{
        "label":"set-24",
        "kind":"set"
      },
      "89":{
        "label":"subset#89-set#24-\nNONE",
        "explanation":"{subset=rel#89:RelSubset#24.NONE}",
        "set":"set-24",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "88" ]
      },
      "88":{
        "label":"#88-LogicalAggregate",
        "explanation":"{group={}, CHARACTER_NAME=MIN($0), RATING=MIN($1), COMPLETE_HERO_MOVIE=MIN($2)}",
        "set":"set-24",
        "cost":"{inf}",
        "inputs":[ "87" ]
      },
      "90":{
        "label":"subset#90-set#24-\nBINDABLE",
        "explanation":"{subset=rel#90:RelSubset#24.BINDABLE, group={}, CHARACTER_NAME=MIN($0), RATING=MIN($1), COMPLETE_HERO_MOVIE=MIN($2)}",
        "set":"set-24",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "91" ]
      },
      "91":{
        "label":"#91-AbstractConverter",
        "explanation":"{convention=BINDABLE}",
        "set":"set-24",
        "cost":"{inf}",
        "inputs":[ "89" ]
      }
    },
    "matchedRels":[ ]
  }, {
    "id":"273-ReduceExpressionsRule(Filter)",
    "updates":{
      "85":{
        "inputs":[ "84", "92" ]
      },
      "92":{
        "label":"#92-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), >($48, 2005), =($27, $47), =($46, $35), =($46, $16), =($46, $1), =($46, $30), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($37, $15), =($24, $36), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-22",
        "cost":"{inf}",
        "inputs":[ "83" ]
      }
    },
    "matchedRels":[ "84" ]
  }, {
    "id":"1-BindableTableScanRule",
    "updates":{
      "94":{
        "label":"subset#94-set#0-\nBINDABLE",
        "explanation":"{subset=rel#94:RelSubset#0.BINDABLE, table=[complete_cast]}",
        "set":"set-0",
        "kind":"subset",
        "cost":"\nrowCount: 1.35086E5\nrows: 1.35086E5\ncpu:  1.35087E5\nio:   0E0",
        "inputs":[ "93" ]
      },
      "93":{
        "label":"#93-BindableTableScan",
        "explanation":"{table=[complete_cast]}",
        "set":"set-0",
        "cost":"\nrowCount: 1.35086E5\nrows: 1.35086E5\ncpu:  1.35087E5\nio:   0E0"
      }
    },
    "matchedRels":[ "1" ]
  }, {
    "id":"13-BindableTableScanRule",
    "updates":{
      "96":{
        "label":"subset#96-set#1-\nBINDABLE",
        "explanation":"{subset=rel#96:RelSubset#1.BINDABLE, table=[comp_cast_type]}",
        "set":"set-1",
        "kind":"subset",
        "cost":"\nrowCount: 4E0\nrows: 4E0\ncpu:  5E0\nio:   0E0",
        "inputs":[ "95" ]
      },
      "95":{
        "label":"#95-BindableTableScan",
        "explanation":"{table=[comp_cast_type]}",
        "set":"set-1",
        "cost":"\nrowCount: 4E0\nrows: 4E0\ncpu:  5E0\nio:   0E0"
      }
    },
    "matchedRels":[ "3" ]
  }, {
    "id":"25-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "98":{
        "label":"subset#98-set#2-\nBINDABLE",
        "explanation":"{subset=rel#98:RelSubset#2.BINDABLE, condition=true, joinType=inner}",
        "set":"set-2",
        "kind":"subset",
        "cost":"\nrowCount: 5.40344E5\nrows: 6.75434E5\ncpu:  1.35092E5\nio:   0E0",
        "inputs":[ "97" ]
      },
      "97":{
        "label":"#97-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-2",
        "cost":"\nrowCount: 5.40344E5\nrows: 6.75434E5\ncpu:  1.35092E5\nio:   0E0",
        "inputs":[ "94", "96" ]
      }
    },
    "matchedRels":[ "53" ]
  }, {
    "id":"36-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "100":{
        "label":"subset#100-set#3-\nBINDABLE",
        "explanation":"{subset=rel#100:RelSubset#3.BINDABLE, condition=true, joinType=inner}",
        "set":"set-3",
        "kind":"subset",
        "cost":"\nrowCount: 2.161376E6\nrows: 2.836814E6\ncpu:  1.35097E5\nio:   0E0",
        "inputs":[ "99" ]
      },
      "99":{
        "label":"#99-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-3",
        "cost":"\nrowCount: 2.161376E6\nrows: 2.836814E6\ncpu:  1.35097E5\nio:   0E0",
        "inputs":[ "98", "96" ]
      }
    },
    "matchedRels":[ "55" ]
  }, {
    "id":"47-BindableTableScanRule",
    "updates":{
      "102":{
        "label":"subset#102-set#4-\nBINDABLE",
        "explanation":"{subset=rel#102:RelSubset#4.BINDABLE, table=[char_name]}",
        "set":"set-4",
        "kind":"subset",
        "cost":"\nrowCount: 3.140339E6\nrows: 3.140339E6\ncpu:  3.14034E6\nio:   0E0",
        "inputs":[ "101" ]
      },
      "101":{
        "label":"#101-BindableTableScan",
        "explanation":"{table=[char_name]}",
        "set":"set-4",
        "cost":"\nrowCount: 3.140339E6\nrows: 3.140339E6\ncpu:  3.14034E6\nio:   0E0"
      }
    },
    "matchedRels":[ "11" ]
  }, {
    "id":"59-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "104":{
        "label":"subset#104-set#5-\nBINDABLE",
        "explanation":"{subset=rel#104:RelSubset#5.BINDABLE, condition=true, joinType=inner}",
        "set":"set-5",
        "kind":"subset",
        "cost":"\nrowCount: 6.787453346464E12\nrows: 6.787459323617E12\ncpu:  3.275437E6\nio:   0E0",
        "inputs":[ "103" ]
      },
      "103":{
        "label":"#103-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-5",
        "cost":"\nrowCount: 6.787453346464E12\nrows: 6.787459323617E12\ncpu:  3.275437E6\nio:   0E0",
        "inputs":[ "100", "102" ]
      }
    },
    "matchedRels":[ "58" ]
  }, {
    "id":"70-BindableTableScanRule",
    "updates":{
      "106":{
        "label":"subset#106-set#6-\nBINDABLE",
        "explanation":"{subset=rel#106:RelSubset#6.BINDABLE, table=[cast_info]}",
        "set":"set-6",
        "kind":"subset",
        "cost":"\nrowCount: 3.6244344E7\nrows: 3.6244344E7\ncpu:  3.6244345E7\nio:   0E0",
        "inputs":[ "105" ]
      },
      "105":{
        "label":"#105-BindableTableScan",
        "explanation":"{table=[cast_info]}",
        "set":"set-6",
        "cost":"\nrowCount: 3.6244344E7\nrows: 3.6244344E7\ncpu:  3.6244345E7\nio:   0E0"
      }
    },
    "matchedRels":[ "15" ]
  }, {
    "id":"82-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "108":{
        "label":"subset#108-set#7-\nBINDABLE",
        "explanation":"{subset=rel#108:RelSubset#7.BINDABLE, condition=true, joinType=inner}",
        "set":"set-7",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  3.9519782E7\nio:   0E0",
        "inputs":[ "107" ]
      },
      "107":{
        "label":"#107-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-7",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  3.9519782E7\nio:   0E0",
        "inputs":[ "104", "106" ]
      }
    },
    "matchedRels":[ "61" ]
  }, {
    "id":"93-BindableTableScanRule",
    "updates":{
      "110":{
        "label":"subset#110-set#8-\nBINDABLE",
        "explanation":"{subset=rel#110:RelSubset#8.BINDABLE, table=[info_type]}",
        "set":"set-8",
        "kind":"subset",
        "cost":"\nrowCount: 1.13E2\nrows: 1.13E2\ncpu:  1.14E2\nio:   0E0",
        "inputs":[ "109" ]
      },
      "109":{
        "label":"#109-BindableTableScan",
        "explanation":"{table=[info_type]}",
        "set":"set-8",
        "cost":"\nrowCount: 1.13E2\nrows: 1.13E2\ncpu:  1.14E2\nio:   0E0"
      }
    },
    "matchedRels":[ "19" ]
  }, {
    "id":"105-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "112":{
        "label":"subset#112-set#9-\nBINDABLE",
        "explanation":"{subset=rel#112:RelSubset#9.BINDABLE, condition=true, joinType=inner}",
        "set":"set-9",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  3.9519896E7\nio:   0E0",
        "inputs":[ "111" ]
      },
      "111":{
        "label":"#111-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-9",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  3.9519896E7\nio:   0E0",
        "inputs":[ "108", "110" ]
      }
    },
    "matchedRels":[ "64" ]
  }, {
    "id":"116-BindableTableScanRule",
    "updates":{
      "114":{
        "label":"subset#114-set#10-\nBINDABLE",
        "explanation":"{subset=rel#114:RelSubset#10.BINDABLE, table=[keyword]}",
        "set":"set-10",
        "kind":"subset",
        "cost":"\nrowCount: 1.3417E5\nrows: 1.3417E5\ncpu:  1.34171E5\nio:   0E0",
        "inputs":[ "113" ]
      },
      "113":{
        "label":"#113-BindableTableScan",
        "explanation":"{table=[keyword]}",
        "set":"set-10",
        "cost":"\nrowCount: 1.3417E5\nrows: 1.3417E5\ncpu:  1.34171E5\nio:   0E0"
      }
    },
    "matchedRels":[ "23" ]
  }, {
    "id":"128-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "116":{
        "label":"subset#116-set#11-\nBINDABLE",
        "explanation":"{subset=rel#116:RelSubset#11.BINDABLE, condition=true, joinType=inner}",
        "set":"set-11",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  3.9654067E7\nio:   0E0",
        "inputs":[ "115" ]
      },
      "115":{
        "label":"#115-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-11",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  3.9654067E7\nio:   0E0",
        "inputs":[ "112", "114" ]
      }
    },
    "matchedRels":[ "67" ]
  }, {
    "id":"139-BindableTableScanRule",
    "updates":{
      "118":{
        "label":"subset#118-set#12-\nBINDABLE",
        "explanation":"{subset=rel#118:RelSubset#12.BINDABLE, table=[kind_type]}",
        "set":"set-12",
        "kind":"subset",
        "cost":"\nrowCount: 7E0\nrows: 7E0\ncpu:  8E0\nio:   0E0",
        "inputs":[ "117" ]
      },
      "117":{
        "label":"#117-BindableTableScan",
        "explanation":"{table=[kind_type]}",
        "set":"set-12",
        "cost":"\nrowCount: 7E0\nrows: 7E0\ncpu:  8E0\nio:   0E0"
      }
    },
    "matchedRels":[ "27" ]
  }, {
    "id":"151-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "120":{
        "label":"subset#120-set#13-\nBINDABLE",
        "explanation":"{subset=rel#120:RelSubset#13.BINDABLE, condition=true, joinType=inner}",
        "set":"set-13",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  3.9654075E7\nio:   0E0",
        "inputs":[ "119" ]
      },
      "119":{
        "label":"#119-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-13",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  3.9654075E7\nio:   0E0",
        "inputs":[ "116", "118" ]
      }
    },
    "matchedRels":[ "70" ]
  }, {
    "id":"162-BindableTableScanRule",
    "updates":{
      "122":{
        "label":"subset#122-set#14-\nBINDABLE",
        "explanation":"{subset=rel#122:RelSubset#14.BINDABLE, table=[movie_info_idx]}",
        "set":"set-14",
        "kind":"subset",
        "cost":"\nrowCount: 1.380035E6\nrows: 1.380035E6\ncpu:  1.380036E6\nio:   0E0",
        "inputs":[ "121" ]
      },
      "121":{
        "label":"#121-BindableTableScan",
        "explanation":"{table=[movie_info_idx]}",
        "set":"set-14",
        "cost":"\nrowCount: 1.380035E6\nrows: 1.380035E6\ncpu:  1.380036E6\nio:   0E0"
      }
    },
    "matchedRels":[ "31" ]
  }, {
    "id":"174-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "124":{
        "label":"subset#124-set#15-\nBINDABLE",
        "explanation":"{subset=rel#124:RelSubset#15.BINDABLE, condition=true, joinType=inner}",
        "set":"set-15",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  4.1034111E7\nio:   0E0",
        "inputs":[ "123" ]
      },
      "123":{
        "label":"#123-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-15",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  4.1034111E7\nio:   0E0",
        "inputs":[ "120", "122" ]
      }
    },
    "matchedRels":[ "73" ]
  }, {
    "id":"185-BindableTableScanRule",
    "updates":{
      "126":{
        "label":"subset#126-set#16-\nBINDABLE",
        "explanation":"{subset=rel#126:RelSubset#16.BINDABLE, table=[movie_keyword]}",
        "set":"set-16",
        "kind":"subset",
        "cost":"\nrowCount: 4.52393E6\nrows: 4.52393E6\ncpu:  4.523931E6\nio:   0E0",
        "inputs":[ "125" ]
      },
      "125":{
        "label":"#125-BindableTableScan",
        "explanation":"{table=[movie_keyword]}",
        "set":"set-16",
        "cost":"\nrowCount: 4.52393E6\nrows: 4.52393E6\ncpu:  4.523931E6\nio:   0E0"
      }
    },
    "matchedRels":[ "35" ]
  }, {
    "id":"197-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "128":{
        "label":"subset#128-set#17-\nBINDABLE",
        "explanation":"{subset=rel#128:RelSubset#17.BINDABLE, condition=true, joinType=inner}",
        "set":"set-17",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  4.5558042E7\nio:   0E0",
        "inputs":[ "127" ]
      },
      "127":{
        "label":"#127-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-17",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  4.5558042E7\nio:   0E0",
        "inputs":[ "124", "126" ]
      }
    },
    "matchedRels":[ "76" ]
  }, {
    "id":"208-BindableTableScanRule",
    "updates":{
      "130":{
        "label":"subset#130-set#18-\nBINDABLE",
        "explanation":"{subset=rel#130:RelSubset#18.BINDABLE, table=[name]}",
        "set":"set-18",
        "kind":"subset",
        "cost":"\nrowCount: 4.167491E6\nrows: 4.167491E6\ncpu:  4.167492E6\nio:   0E0",
        "inputs":[ "129" ]
      },
      "129":{
        "label":"#129-BindableTableScan",
        "explanation":"{table=[name]}",
        "set":"set-18",
        "cost":"\nrowCount: 4.167491E6\nrows: 4.167491E6\ncpu:  4.167492E6\nio:   0E0"
      }
    },
    "matchedRels":[ "39" ]
  }, {
    "id":"220-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "132":{
        "label":"subset#132-set#19-\nBINDABLE",
        "explanation":"{subset=rel#132:RelSubset#19.BINDABLE, condition=true, joinType=inner}",
        "set":"set-19",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  4.9725534E7\nio:   0E0",
        "inputs":[ "131" ]
      },
      "131":{
        "label":"#131-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-19",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  4.9725534E7\nio:   0E0",
        "inputs":[ "128", "130" ]
      }
    },
    "matchedRels":[ "79" ]
  }, {
    "id":"231-BindableTableScanRule",
    "updates":{
      "134":{
        "label":"subset#134-set#20-\nBINDABLE",
        "explanation":"{subset=rel#134:RelSubset#20.BINDABLE, table=[title]}",
        "set":"set-20",
        "kind":"subset",
        "cost":"\nrowCount: 2.528312E6\nrows: 2.528312E6\ncpu:  2.528313E6\nio:   0E0",
        "inputs":[ "133" ]
      },
      "133":{
        "label":"#133-BindableTableScan",
        "explanation":"{table=[title]}",
        "set":"set-20",
        "cost":"\nrowCount: 2.528312E6\nrows: 2.528312E6\ncpu:  2.528313E6\nio:   0E0"
      }
    },
    "matchedRels":[ "43" ]
  }, {
    "id":"243-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "136":{
        "label":"subset#136-set#21-\nBINDABLE",
        "explanation":"{subset=rel#136:RelSubset#21.BINDABLE, condition=true, joinType=inner}",
        "set":"set-21",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  5.2253847E7\nio:   0E0",
        "inputs":[ "135" ]
      },
      "135":{
        "label":"#135-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-21",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  5.2253847E7\nio:   0E0",
        "inputs":[ "132", "134" ]
      }
    },
    "matchedRels":[ "82" ]
  }, {
    "id":"275-BindableProjectRule(in:NONE,out:BINDABLE)",
    "updates":{
      "137":{
        "label":"subset#137-set#22-\nBINDABLE",
        "explanation":"{subset=rel#137:RelSubset#22.BINDABLE, condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), IS NOT NULL($10), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), OR(=($25, 'superhero'), =($25, 'marvel-comics'), =($25, 'based-on-comic'), =($25, 'fight')), =($28, 'movie'), >($32, '8.0'), >($48, 2005), =($27, $47), =($46, $35), =($46, $16), =($46, $1), =($46, $30), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($37, $15), =($24, $36), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-22",
        "kind":"subset",
        "cost":"{inf}"
      },
      "139":{
        "label":"subset#139-set#23-\nBINDABLE",
        "explanation":"{subset=rel#139:RelSubset#23.BINDABLE, name=$10, info0=$32, title=$53}",
        "set":"set-23",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "138" ]
      },
      "138":{
        "label":"#138-BindableProject",
        "explanation":"{name=$10, info0=$32, title=$53}",
        "set":"set-23",
        "cost":"{inf}",
        "inputs":[ "137" ]
      }
    },
    "matchedRels":[ "86" ]
  }, {
    "id":"295-BindableAggregateRule(in:NONE,out:BINDABLE)",
    "updates":{
      "90":{
        "inputs":[ "91", "140" ]
      },
      "140":{
        "label":"#140-BindableAggregate",
        "explanation":"{group={}, CHARACTER_NAME=MIN($0), RATING=MIN($1), COMPLETE_HERO_MOVIE=MIN($2)}",
        "set":"set-24",
        "cost":"{inf}",
        "inputs":[ "139" ]
      }
    },
    "matchedRels":[ "88" ]
  }, {
    "id":"321-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "90":{
        "cost":"\nrowCount: 1E0\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0"
      },
      "137":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "141" ]
      },
      "139":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0"
      },
      "138":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0"
      },
      "140":{
        "cost":"\nrowCount: 1E0\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0"
      },
      "141":{
        "label":"#141-BindableFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), >($48, 2005), =($27, $47), =($46, $35), =($46, $16), =($46, $1), =($46, $30), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($37, $15), =($24, $36), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-22",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "136" ]
      }
    },
    "matchedRels":[ "92" ]
  }, {
    "id":"334-ProjectFilterTransposeRule",
    "updates":{
      "87":{
        "inputs":[ "86", "148" ]
      },
      "set-25":{
        "label":"set-25",
        "kind":"set"
      },
      "145":{
        "label":"subset#145-set#25-\nNONE",
        "explanation":"{subset=rel#145:RelSubset#25.NONE}",
        "set":"set-25",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "142" ]
      },
      "142":{
        "label":"#142-LogicalProject",
        "explanation":"{movie_id=$1, subject_id=$2, status_id=$3, id0=$4, kind=$5, id1=$6, kind0=$7, id2=$8, name=$10, person_id=$15, movie_id0=$16, person_role_id=$17, id4=$22, info=$23, id5=$24, keyword=$25, id6=$27, kind1=$28, movie_id1=$30, info_type_id=$31, info0=$32, movie_id2=$35, keyword_id=$36, id9=$37, id10=$46, kind_id=$47, production_year=$48, title=$53}",
        "set":"set-25",
        "cost":"{inf}",
        "inputs":[ "83" ]
      },
      "set-26":{
        "label":"set-26",
        "kind":"set"
      },
      "147":{
        "label":"subset#147-set#26-\nNONE",
        "explanation":"{subset=rel#147:RelSubset#26.NONE}",
        "set":"set-26",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "146" ]
      },
      "146":{
        "label":"#146-LogicalFilter",
        "explanation":"{condition=AND(=($4, 'cast'), LIKE($6, '%complete%'), OR(LIKE($8, '%man%'), LIKE($8, '%Man%')), =($13, 'rating'), SEARCH($15, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($17, 'movie'), >($20, '8.0'), >($26, 2005), =($16, $25), =($24, $21), =($24, $10), =($24, $0), =($24, $18), =($21, $10), =($21, $0), =($21, $18), =($10, $0), =($10, $18), =($0, $18), =($7, $11), =($23, $9), =($14, $22), =($3, $1), =($5, $2), =($12, $19))}",
        "set":"set-26",
        "cost":"{inf}",
        "inputs":[ "145" ]
      },
      "148":{
        "label":"#148-LogicalProject",
        "explanation":"{name=$8, info0=$20, title=$27}",
        "set":"set-23",
        "cost":"{inf}",
        "inputs":[ "147" ]
      }
    },
    "matchedRels":[ "86", "92" ]
  }, {
    "id":"337-FilterIntoJoinRule",
    "updates":{
      "85":{
        "inputs":[ "84", "92", "154" ]
      },
      "set-27":{
        "label":"set-27",
        "kind":"set"
      },
      "152":{
        "label":"subset#152-set#27-\nNONE",
        "explanation":"{subset=rel#152:RelSubset#27.NONE}",
        "set":"set-27",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "149" ]
      },
      "149":{
        "label":"#149-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($37, $15), =($24, $36), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-27",
        "cost":"{inf}",
        "inputs":[ "80" ]
      },
      "set-28":{
        "label":"set-28",
        "kind":"set"
      },
      "153":{
        "label":"subset#153-set#28-\nNONE",
        "explanation":"{subset=rel#153:RelSubset#28.NONE}",
        "set":"set-28",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "150" ]
      },
      "150":{
        "label":"#150-LogicalFilter",
        "explanation":"{condition=>($2, 2005)}",
        "set":"set-28",
        "cost":"{inf}",
        "inputs":[ "81" ]
      },
      "154":{
        "label":"#154-LogicalJoin",
        "explanation":"{condition=AND(=($27, $47), =($35, $46)), joinType=inner}",
        "set":"set-22",
        "cost":"{inf}",
        "inputs":[ "152", "153" ]
      }
    },
    "matchedRels":[ "92", "82" ]
  }, {
    "id":"590-FilterIntoJoinRule",
    "updates":{
      "137":{
        "inputs":[ "141", "160" ]
      },
      "set-29":{
        "label":"set-29",
        "kind":"set"
      },
      "158":{
        "label":"subset#158-set#29-\nNONE",
        "explanation":"{subset=rel#158:RelSubset#29.NONE}",
        "set":"set-29",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "155" ]
      },
      "155":{
        "label":"#155-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($37, $15), =($24, $36), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-29",
        "cost":"{inf}",
        "inputs":[ "132" ]
      },
      "set-30":{
        "label":"set-30",
        "kind":"set"
      },
      "159":{
        "label":"subset#159-set#30-\nNONE",
        "explanation":"{subset=rel#159:RelSubset#30.NONE}",
        "set":"set-30",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "156" ]
      },
      "156":{
        "label":"#156-LogicalFilter",
        "explanation":"{condition=>($2, 2005)}",
        "set":"set-30",
        "cost":"{inf}",
        "inputs":[ "134" ]
      },
      "160":{
        "label":"#160-BindableJoin",
        "explanation":"{condition=AND(=($27, $47), =($35, $46)), joinType=inner}",
        "set":"set-22",
        "cost":"{inf}",
        "inputs":[ "158", "159" ]
      }
    },
    "matchedRels":[ "141", "135" ]
  }, {
    "id":"594-BindableProjectRule(in:NONE,out:BINDABLE)",
    "updates":{
      "162":{
        "label":"subset#162-set#25-\nBINDABLE",
        "explanation":"{subset=rel#162:RelSubset#25.BINDABLE, movie_id=$1, subject_id=$2, status_id=$3, id0=$4, kind=$5, id1=$6, kind0=$7, id2=$8, name=$10, person_id=$15, movie_id0=$16, person_role_id=$17, id4=$22, info=$23, id5=$24, keyword=$25, id6=$27, kind1=$28, movie_id1=$30, info_type_id=$31, info0=$32, movie_id2=$35, keyword_id=$36, id9=$37, id10=$46, kind_id=$47, production_year=$48, title=$53}",
        "set":"set-25",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "161" ]
      },
      "161":{
        "label":"#161-BindableProject",
        "explanation":"{movie_id=$1, subject_id=$2, status_id=$3, id0=$4, kind=$5, id1=$6, kind0=$7, id2=$8, name=$10, person_id=$15, movie_id0=$16, person_role_id=$17, id4=$22, info=$23, id5=$24, keyword=$25, id6=$27, kind1=$28, movie_id1=$30, info_type_id=$31, info0=$32, movie_id2=$35, keyword_id=$36, id9=$37, id10=$46, kind_id=$47, production_year=$48, title=$53}",
        "set":"set-25",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "136" ]
      }
    },
    "matchedRels":[ "142" ]
  }, {
    "id":"613-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "164":{
        "label":"subset#164-set#26-\nBINDABLE",
        "explanation":"{subset=rel#164:RelSubset#26.BINDABLE, condition=AND(=($4, 'cast'), LIKE($6, '%complete%'), OR(LIKE($8, '%man%'), LIKE($8, '%Man%')), =($13, 'rating'), SEARCH($15, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($17, 'movie'), >($20, '8.0'), >($26, 2005), =($16, $25), =($24, $21), =($24, $10), =($24, $0), =($24, $18), =($21, $10), =($21, $0), =($21, $18), =($10, $0), =($10, $18), =($0, $18), =($7, $11), =($23, $9), =($14, $22), =($3, $1), =($5, $2), =($12, $19))}",
        "set":"set-26",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "163" ]
      },
      "163":{
        "label":"#163-BindableFilter",
        "explanation":"{condition=AND(=($4, 'cast'), LIKE($6, '%complete%'), OR(LIKE($8, '%man%'), LIKE($8, '%Man%')), =($13, 'rating'), SEARCH($15, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($17, 'movie'), >($20, '8.0'), >($26, 2005), =($16, $25), =($24, $21), =($24, $10), =($24, $0), =($24, $18), =($21, $10), =($21, $0), =($21, $18), =($10, $0), =($10, $18), =($0, $18), =($7, $11), =($23, $9), =($14, $22), =($3, $1), =($5, $2), =($12, $19))}",
        "set":"set-26",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "162" ]
      }
    },
    "matchedRels":[ "146" ]
  }, {
    "id":"627-FilterProjectTransposeRule",
    "updates":{
      "147":{
        "inputs":[ "146", "167" ]
      },
      "167":{
        "label":"#167-LogicalProject",
        "explanation":"{movie_id=$1, subject_id=$2, status_id=$3, id0=$4, kind=$5, id1=$6, kind0=$7, id2=$8, name=$10, person_id=$15, movie_id0=$16, person_role_id=$17, id4=$22, info=$23, id5=$24, keyword=$25, id6=$27, kind1=$28, movie_id1=$30, info_type_id=$31, info0=$32, movie_id2=$35, keyword_id=$36, id9=$37, id10=$46, kind_id=$47, production_year=$48, title=$53}",
        "set":"set-26",
        "cost":"{inf}",
        "inputs":[ "85" ]
      }
    },
    "matchedRels":[ "146", "142" ]
  }, {
    "id":"634-BindableProjectRule(in:NONE,out:BINDABLE)",
    "updates":{
      "139":{
        "inputs":[ "138", "168" ]
      },
      "168":{
        "label":"#168-BindableProject",
        "explanation":"{name=$8, info0=$20, title=$27}",
        "set":"set-23",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "164" ]
      }
    },
    "matchedRels":[ "148" ]
  }, {
    "id":"655-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "170":{
        "label":"subset#170-set#27-\nBINDABLE",
        "explanation":"{subset=rel#170:RelSubset#27.BINDABLE, condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($37, $15), =($24, $36), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-27",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "169" ]
      },
      "169":{
        "label":"#169-BindableFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($37, $15), =($24, $36), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-27",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "132" ]
      }
    },
    "matchedRels":[ "149" ]
  }, {
    "id":"670-FilterIntoJoinRule",
    "updates":{
      "152":{
        "inputs":[ "149", "174" ]
      },
      "set-31":{
        "label":"set-31",
        "kind":"set"
      },
      "173":{
        "label":"subset#173-set#31-\nNONE",
        "explanation":"{subset=rel#173:RelSubset#31.NONE}",
        "set":"set-31",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "171" ]
      },
      "171":{
        "label":"#171-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($24, $36), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-31",
        "cost":"{inf}",
        "inputs":[ "77" ]
      },
      "174":{
        "label":"#174-LogicalJoin",
        "explanation":"{condition==($37, $15), joinType=inner}",
        "set":"set-27",
        "cost":"{inf}",
        "inputs":[ "173", "78" ]
      }
    },
    "matchedRels":[ "149", "79" ]
  }, {
    "id":"676-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "176":{
        "label":"subset#176-set#28-\nBINDABLE",
        "explanation":"{subset=rel#176:RelSubset#28.BINDABLE, condition=>($2, 2005)}",
        "set":"set-28",
        "kind":"subset",
        "cost":"\nrowCount: 1.264156E6\nrows: 3.792468E6\ncpu:  5.056625E6\nio:   0E0",
        "inputs":[ "175" ]
      },
      "175":{
        "label":"#175-BindableFilter",
        "explanation":"{condition=>($2, 2005)}",
        "set":"set-28",
        "cost":"\nrowCount: 1.264156E6\nrows: 3.792468E6\ncpu:  5.056625E6\nio:   0E0",
        "inputs":[ "134" ]
      }
    },
    "matchedRels":[ "150" ]
  }, {
    "id":"696-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "137":{
        "inputs":[ "141", "160", "177" ]
      },
      "177":{
        "label":"#177-BindableJoin",
        "explanation":"{condition=AND(=($27, $47), =($35, $46)), joinType=inner}",
        "set":"set-22",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "170", "176" ]
      }
    },
    "matchedRels":[ "154" ]
  }, {
    "id":"707-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "152":{
        "inputs":[ "149", "174", "155" ]
      },
      "155":{
        "set":"set-27"
      },
      "160":{
        "inputs":[ "152", "159" ]
      }
    },
    "matchedRels":[ "155" ]
  }, {
    "id":"727-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "153":{
        "inputs":[ "150", "156" ]
      },
      "156":{
        "set":"set-28"
      },
      "160":{
        "inputs":[ "152", "153" ]
      }
    },
    "matchedRels":[ "156" ]
  }, {
    "id":"781-FilterProjectTransposeRule",
    "updates":{
      "164":{
        "inputs":[ "163", "182" ]
      },
      "182":{
        "label":"#182-BindableProject",
        "explanation":"{movie_id=$1, subject_id=$2, status_id=$3, id0=$4, kind=$5, id1=$6, kind0=$7, id2=$8, name=$10, person_id=$15, movie_id0=$16, person_role_id=$17, id4=$22, info=$23, id5=$24, keyword=$25, id6=$27, kind1=$28, movie_id1=$30, info_type_id=$31, info0=$32, movie_id2=$35, keyword_id=$36, id9=$37, id10=$46, kind_id=$47, production_year=$48, title=$53}",
        "set":"set-26",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "137" ]
      }
    },
    "matchedRels":[ "163", "161" ]
  }, {
    "id":"786-BindableProjectRule(in:NONE,out:BINDABLE)",
    "updates":{ },
    "matchedRels":[ "167" ]
  }, {
    "id":"798-ProjectFilterTransposeRule",
    "updates":{ },
    "matchedRels":[ "167", "92" ]
  }, {
    "id":"833-FilterIntoJoinRule",
    "updates":{
      "170":{
        "inputs":[ "169", "190" ]
      },
      "set-32":{
        "label":"set-32",
        "kind":"set"
      },
      "189":{
        "label":"subset#189-set#32-\nNONE",
        "explanation":"{subset=rel#189:RelSubset#32.NONE}",
        "set":"set-32",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "187" ]
      },
      "187":{
        "label":"#187-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($24, $36), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-32",
        "cost":"{inf}",
        "inputs":[ "128" ]
      },
      "190":{
        "label":"#190-BindableJoin",
        "explanation":"{condition==($37, $15), joinType=inner}",
        "set":"set-27",
        "cost":"{inf}",
        "inputs":[ "189", "130" ]
      }
    },
    "matchedRels":[ "169", "131" ]
  }, {
    "id":"837-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "192":{
        "label":"subset#192-set#31-\nBINDABLE",
        "explanation":"{subset=rel#192:RelSubset#31.BINDABLE, condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($24, $36), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-31",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "191" ]
      },
      "191":{
        "label":"#191-BindableFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($24, $36), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-31",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "128" ]
      }
    },
    "matchedRels":[ "171" ]
  }, {
    "id":"852-FilterIntoJoinRule",
    "updates":{
      "173":{
        "inputs":[ "171", "196" ]
      },
      "set-33":{
        "label":"set-33",
        "kind":"set"
      },
      "195":{
        "label":"subset#195-set#33-\nNONE",
        "explanation":"{subset=rel#195:RelSubset#33.NONE}",
        "set":"set-33",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "193" ]
      },
      "193":{
        "label":"#193-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-33",
        "cost":"{inf}",
        "inputs":[ "74" ]
      },
      "196":{
        "label":"#196-LogicalJoin",
        "explanation":"{condition=AND(=($16, $35), =($24, $36)), joinType=inner}",
        "set":"set-31",
        "cost":"{inf}",
        "inputs":[ "195", "75" ]
      }
    },
    "matchedRels":[ "171", "76" ]
  }, {
    "id":"858-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "170":{
        "inputs":[ "169", "190", "197" ]
      },
      "197":{
        "label":"#197-BindableJoin",
        "explanation":"{condition==($37, $15), joinType=inner}",
        "set":"set-27",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "192", "130" ]
      }
    },
    "matchedRels":[ "174" ]
  }, {
    "id":"1030-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "173":{
        "inputs":[ "171", "196", "187" ]
      },
      "187":{
        "set":"set-31"
      },
      "190":{
        "inputs":[ "173", "130" ]
      }
    },
    "matchedRels":[ "187" ]
  }, {
    "id":"1071-FilterIntoJoinRule",
    "updates":{
      "192":{
        "inputs":[ "191", "202" ]
      },
      "set-34":{
        "label":"set-34",
        "kind":"set"
      },
      "201":{
        "label":"subset#201-set#34-\nNONE",
        "explanation":"{subset=rel#201:RelSubset#34.NONE}",
        "set":"set-34",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "199" ]
      },
      "199":{
        "label":"#199-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-34",
        "cost":"{inf}",
        "inputs":[ "124" ]
      },
      "202":{
        "label":"#202-BindableJoin",
        "explanation":"{condition=AND(=($16, $35), =($24, $36)), joinType=inner}",
        "set":"set-31",
        "cost":"{inf}",
        "inputs":[ "201", "126" ]
      }
    },
    "matchedRels":[ "191", "127" ]
  }, {
    "id":"1075-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "204":{
        "label":"subset#204-set#33-\nBINDABLE",
        "explanation":"{subset=rel#204:RelSubset#33.BINDABLE, condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-33",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "203" ]
      },
      "203":{
        "label":"#203-BindableFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), >($32, '8.0'), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($4, $2), =($6, $3), =($22, $31))}",
        "set":"set-33",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "124" ]
      }
    },
    "matchedRels":[ "193" ]
  }, {
    "id":"1090-FilterIntoJoinRule",
    "updates":{
      "195":{
        "inputs":[ "193", "210" ]
      },
      "set-35":{
        "label":"set-35",
        "kind":"set"
      },
      "208":{
        "label":"subset#208-set#35-\nNONE",
        "explanation":"{subset=rel#208:RelSubset#35.NONE}",
        "set":"set-35",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "205" ]
      },
      "205":{
        "label":"#205-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-35",
        "cost":"{inf}",
        "inputs":[ "71" ]
      },
      "set-36":{
        "label":"set-36",
        "kind":"set"
      },
      "209":{
        "label":"subset#209-set#36-\nNONE",
        "explanation":"{subset=rel#209:RelSubset#36.NONE}",
        "set":"set-36",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "206" ]
      },
      "206":{
        "label":"#206-LogicalFilter",
        "explanation":"{condition=>($3, '8.0')}",
        "set":"set-36",
        "cost":"{inf}",
        "inputs":[ "72" ]
      },
      "210":{
        "label":"#210-LogicalJoin",
        "explanation":"{condition=AND(=($16, $30), =($22, $31)), joinType=inner}",
        "set":"set-33",
        "cost":"{inf}",
        "inputs":[ "208", "209" ]
      }
    },
    "matchedRels":[ "193", "73" ]
  }, {
    "id":"1096-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "192":{
        "inputs":[ "191", "202", "211" ]
      },
      "211":{
        "label":"#211-BindableJoin",
        "explanation":"{condition=AND(=($16, $35), =($24, $36)), joinType=inner}",
        "set":"set-31",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "204", "126" ]
      }
    },
    "matchedRels":[ "196" ]
  }, {
    "id":"1184-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "195":{
        "inputs":[ "193", "210", "199" ]
      },
      "199":{
        "set":"set-33"
      },
      "202":{
        "inputs":[ "195", "126" ]
      }
    },
    "matchedRels":[ "199" ]
  }, {
    "id":"1225-FilterIntoJoinRule",
    "updates":{
      "204":{
        "inputs":[ "203", "218" ]
      },
      "set-37":{
        "label":"set-37",
        "kind":"set"
      },
      "216":{
        "label":"subset#216-set#37-\nNONE",
        "explanation":"{subset=rel#216:RelSubset#37.NONE}",
        "set":"set-37",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "213" ]
      },
      "213":{
        "label":"#213-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-37",
        "cost":"{inf}",
        "inputs":[ "120" ]
      },
      "set-38":{
        "label":"set-38",
        "kind":"set"
      },
      "217":{
        "label":"subset#217-set#38-\nNONE",
        "explanation":"{subset=rel#217:RelSubset#38.NONE}",
        "set":"set-38",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "214" ]
      },
      "214":{
        "label":"#214-LogicalFilter",
        "explanation":"{condition=>($3, '8.0')}",
        "set":"set-38",
        "cost":"{inf}",
        "inputs":[ "122" ]
      },
      "218":{
        "label":"#218-BindableJoin",
        "explanation":"{condition=AND(=($16, $30), =($22, $31)), joinType=inner}",
        "set":"set-33",
        "cost":"{inf}",
        "inputs":[ "216", "217" ]
      }
    },
    "matchedRels":[ "203", "123" ]
  }, {
    "id":"1229-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "220":{
        "label":"subset#220-set#35-\nBINDABLE",
        "explanation":"{subset=rel#220:RelSubset#35.BINDABLE, condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-35",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "219" ]
      },
      "219":{
        "label":"#219-BindableFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($28, 'movie'), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-35",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "120" ]
      }
    },
    "matchedRels":[ "205" ]
  }, {
    "id":"1244-FilterIntoJoinRule",
    "updates":{
      "208":{
        "inputs":[ "205", "226" ]
      },
      "set-39":{
        "label":"set-39",
        "kind":"set"
      },
      "224":{
        "label":"subset#224-set#39-\nNONE",
        "explanation":"{subset=rel#224:RelSubset#39.NONE}",
        "set":"set-39",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "221" ]
      },
      "221":{
        "label":"#221-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-39",
        "cost":"{inf}",
        "inputs":[ "68" ]
      },
      "set-40":{
        "label":"set-40",
        "kind":"set"
      },
      "225":{
        "label":"subset#225-set#40-\nNONE",
        "explanation":"{subset=rel#225:RelSubset#40.NONE}",
        "set":"set-40",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "222" ]
      },
      "222":{
        "label":"#222-LogicalFilter",
        "explanation":"{condition==($1, 'movie')}",
        "set":"set-40",
        "cost":"{inf}",
        "inputs":[ "69" ]
      },
      "226":{
        "label":"#226-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-35",
        "cost":"{inf}",
        "inputs":[ "224", "225" ]
      }
    },
    "matchedRels":[ "205", "70" ]
  }, {
    "id":"1250-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "228":{
        "label":"subset#228-set#36-\nBINDABLE",
        "explanation":"{subset=rel#228:RelSubset#36.BINDABLE, condition=>($3, '8.0')}",
        "set":"set-36",
        "kind":"subset",
        "cost":"\nrowCount: 6.90018E5\nrows: 2.070053E6\ncpu:  2.760071E6\nio:   0E0",
        "inputs":[ "227" ]
      },
      "227":{
        "label":"#227-BindableFilter",
        "explanation":"{condition=>($3, '8.0')}",
        "set":"set-36",
        "cost":"\nrowCount: 6.90018E5\nrows: 2.070053E6\ncpu:  2.760071E6\nio:   0E0",
        "inputs":[ "122" ]
      }
    },
    "matchedRels":[ "206" ]
  }, {
    "id":"1270-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "204":{
        "inputs":[ "203", "218", "229" ]
      },
      "229":{
        "label":"#229-BindableJoin",
        "explanation":"{condition=AND(=($16, $30), =($22, $31)), joinType=inner}",
        "set":"set-33",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "220", "228" ]
      }
    },
    "matchedRels":[ "210" ]
  }, {
    "id":"1358-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "208":{
        "inputs":[ "205", "226", "213" ]
      },
      "213":{
        "set":"set-35"
      },
      "218":{
        "inputs":[ "208", "217" ]
      }
    },
    "matchedRels":[ "213" ]
  }, {
    "id":"1378-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "209":{
        "inputs":[ "206", "214" ]
      },
      "214":{
        "set":"set-36"
      },
      "218":{
        "inputs":[ "208", "209" ]
      }
    },
    "matchedRels":[ "214" ]
  }, {
    "id":"1419-FilterIntoJoinRule",
    "updates":{
      "220":{
        "inputs":[ "219", "237" ]
      },
      "set-41":{
        "label":"set-41",
        "kind":"set"
      },
      "235":{
        "label":"subset#235-set#41-\nNONE",
        "explanation":"{subset=rel#235:RelSubset#41.NONE}",
        "set":"set-41",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "232" ]
      },
      "232":{
        "label":"#232-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-41",
        "cost":"{inf}",
        "inputs":[ "116" ]
      },
      "set-42":{
        "label":"set-42",
        "kind":"set"
      },
      "236":{
        "label":"subset#236-set#42-\nNONE",
        "explanation":"{subset=rel#236:RelSubset#42.NONE}",
        "set":"set-42",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "233" ]
      },
      "233":{
        "label":"#233-LogicalFilter",
        "explanation":"{condition==($1, 'movie')}",
        "set":"set-42",
        "cost":"{inf}",
        "inputs":[ "118" ]
      },
      "237":{
        "label":"#237-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-35",
        "cost":"{inf}",
        "inputs":[ "235", "236" ]
      }
    },
    "matchedRels":[ "219", "119" ]
  }, {
    "id":"1423-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "239":{
        "label":"subset#239-set#39-\nBINDABLE",
        "explanation":"{subset=rel#239:RelSubset#39.BINDABLE, condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-39",
        "kind":"subset",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "238" ]
      },
      "238":{
        "label":"#238-BindableFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), SEARCH($25, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14)), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-39",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "116" ]
      }
    },
    "matchedRels":[ "221" ]
  }, {
    "id":"1438-FilterIntoJoinRule",
    "updates":{
      "224":{
        "inputs":[ "221", "245" ]
      },
      "set-43":{
        "label":"set-43",
        "kind":"set"
      },
      "243":{
        "label":"subset#243-set#43-\nNONE",
        "explanation":"{subset=rel#243:RelSubset#43.NONE}",
        "set":"set-43",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "240" ]
      },
      "240":{
        "label":"#240-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-43",
        "cost":"{inf}",
        "inputs":[ "65" ]
      },
      "set-44":{
        "label":"set-44",
        "kind":"set"
      },
      "244":{
        "label":"subset#244-set#44-\nNONE",
        "explanation":"{subset=rel#244:RelSubset#44.NONE}",
        "set":"set-44",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "241" ]
      },
      "241":{
        "label":"#241-LogicalFilter",
        "explanation":"{condition=SEARCH($1, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14))}",
        "set":"set-44",
        "cost":"{inf}",
        "inputs":[ "66" ]
      },
      "245":{
        "label":"#245-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-39",
        "cost":"{inf}",
        "inputs":[ "243", "244" ]
      }
    },
    "matchedRels":[ "221", "67" ]
  }, {
    "id":"1444-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "247":{
        "label":"subset#247-set#40-\nBINDABLE",
        "explanation":"{subset=rel#247:RelSubset#40.BINDABLE, condition==($1, 'movie')}",
        "set":"set-40",
        "kind":"subset",
        "cost":"\nrowCount: 1E0\nrows: 8E0\ncpu:  1.5E1\nio:   0E0",
        "inputs":[ "246" ]
      },
      "246":{
        "label":"#246-BindableFilter",
        "explanation":"{condition==($1, 'movie')}",
        "set":"set-40",
        "cost":"\nrowCount: 1E0\nrows: 8E0\ncpu:  1.5E1\nio:   0E0",
        "inputs":[ "118" ]
      }
    },
    "matchedRels":[ "222" ]
  }, {
    "id":"1464-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "220":{
        "inputs":[ "219", "237", "248" ]
      },
      "248":{
        "label":"#248-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-35",
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "239", "247" ]
      }
    },
    "matchedRels":[ "226" ]
  }, {
    "id":"1622-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "224":{
        "inputs":[ "221", "245", "232" ]
      },
      "232":{
        "set":"set-39"
      },
      "237":{
        "inputs":[ "224", "236" ]
      }
    },
    "matchedRels":[ "232" ]
  }, {
    "id":"1642-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "225":{
        "inputs":[ "222", "233" ]
      },
      "233":{
        "set":"set-40"
      },
      "237":{
        "inputs":[ "224", "225" ]
      }
    },
    "matchedRels":[ "233" ]
  }, {
    "id":"1683-FilterIntoJoinRule",
    "updates":{
      "239":{
        "inputs":[ "238", "256" ]
      },
      "set-45":{
        "label":"set-45",
        "kind":"set"
      },
      "254":{
        "label":"subset#254-set#45-\nNONE",
        "explanation":"{subset=rel#254:RelSubset#45.NONE}",
        "set":"set-45",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "251" ]
      },
      "251":{
        "label":"#251-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-45",
        "cost":"{inf}",
        "inputs":[ "112" ]
      },
      "set-46":{
        "label":"set-46",
        "kind":"set"
      },
      "255":{
        "label":"subset#255-set#46-\nNONE",
        "explanation":"{subset=rel#255:RelSubset#46.NONE}",
        "set":"set-46",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "252" ]
      },
      "252":{
        "label":"#252-LogicalFilter",
        "explanation":"{condition=SEARCH($1, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14))}",
        "set":"set-46",
        "cost":"{inf}",
        "inputs":[ "114" ]
      },
      "256":{
        "label":"#256-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-39",
        "cost":"{inf}",
        "inputs":[ "254", "255" ]
      }
    },
    "matchedRels":[ "238", "115" ]
  }, {
    "id":"1687-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "258":{
        "label":"subset#258-set#43-\nBINDABLE",
        "explanation":"{subset=rel#258:RelSubset#43.BINDABLE, condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-43",
        "kind":"subset",
        "cost":"\nrowCount: 1.9790333659306316E16\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "257" ]
      },
      "257":{
        "label":"#257-BindableFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-43",
        "cost":"\nrowCount: 1.9790333659306316E16\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "112" ]
      }
    },
    "matchedRels":[ "240" ]
  }, {
    "id":"1702-FilterIntoJoinRule",
    "updates":{
      "243":{
        "inputs":[ "240", "264" ]
      },
      "set-47":{
        "label":"set-47",
        "kind":"set"
      },
      "262":{
        "label":"subset#262-set#47-\nNONE",
        "explanation":"{subset=rel#262:RelSubset#47.NONE}",
        "set":"set-47",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "259" ]
      },
      "259":{
        "label":"#259-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-47",
        "cost":"{inf}",
        "inputs":[ "62" ]
      },
      "set-48":{
        "label":"set-48",
        "kind":"set"
      },
      "263":{
        "label":"subset#263-set#48-\nNONE",
        "explanation":"{subset=rel#263:RelSubset#48.NONE}",
        "set":"set-48",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "260" ]
      },
      "260":{
        "label":"#260-LogicalFilter",
        "explanation":"{condition==($1, 'rating')}",
        "set":"set-48",
        "cost":"{inf}",
        "inputs":[ "63" ]
      },
      "264":{
        "label":"#264-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-43",
        "cost":"{inf}",
        "inputs":[ "262", "263" ]
      }
    },
    "matchedRels":[ "240", "64" ]
  }, {
    "id":"1708-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "266":{
        "label":"subset#266-set#44-\nBINDABLE",
        "explanation":"{subset=rel#266:RelSubset#44.BINDABLE, condition=SEARCH($1, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14))}",
        "set":"set-44",
        "kind":"subset",
        "cost":"\nrowCount: 4E0\nrows: 1.34174E5\ncpu:  2.68341E5\nio:   0E0",
        "inputs":[ "265" ]
      },
      "265":{
        "label":"#265-BindableFilter",
        "explanation":"{condition=SEARCH($1, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14))}",
        "set":"set-44",
        "cost":"\nrowCount: 4E0\nrows: 1.34174E5\ncpu:  2.68341E5\nio:   0E0",
        "inputs":[ "114" ]
      }
    },
    "matchedRels":[ "241" ]
  }, {
    "id":"1728-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "220":{
        "cost":"\nrowCount: 7.9160449630055632E16\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0"
      },
      "239":{
        "cost":"\nrowCount: 7.9160449630055632E16\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "238", "256", "267" ]
      },
      "248":{
        "cost":"\nrowCount: 7.9160449630055632E16\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0"
      },
      "267":{
        "label":"#267-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-39",
        "cost":"\nrowCount: 7.9160449630055632E16\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "258", "266" ]
      }
    },
    "matchedRels":[ "245" ]
  }, {
    "id":"1886-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "243":{
        "inputs":[ "240", "264", "251" ]
      },
      "251":{
        "set":"set-43"
      },
      "256":{
        "inputs":[ "243", "255" ]
      }
    },
    "matchedRels":[ "251" ]
  }, {
    "id":"1906-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "244":{
        "inputs":[ "241", "252" ]
      },
      "252":{
        "set":"set-44"
      },
      "256":{
        "inputs":[ "243", "244" ]
      }
    },
    "matchedRels":[ "252" ]
  }, {
    "id":"1947-FilterIntoJoinRule",
    "updates":{
      "258":{
        "inputs":[ "257", "275" ]
      },
      "set-49":{
        "label":"set-49",
        "kind":"set"
      },
      "273":{
        "label":"subset#273-set#49-\nNONE",
        "explanation":"{subset=rel#273:RelSubset#49.NONE}",
        "set":"set-49",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "270" ]
      },
      "270":{
        "label":"#270-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-49",
        "cost":"{inf}",
        "inputs":[ "108" ]
      },
      "set-50":{
        "label":"set-50",
        "kind":"set"
      },
      "274":{
        "label":"subset#274-set#50-\nNONE",
        "explanation":"{subset=rel#274:RelSubset#50.NONE}",
        "set":"set-50",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "271" ]
      },
      "271":{
        "label":"#271-LogicalFilter",
        "explanation":"{condition==($1, 'rating')}",
        "set":"set-50",
        "cost":"{inf}",
        "inputs":[ "110" ]
      },
      "275":{
        "label":"#275-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-43",
        "cost":"{inf}",
        "inputs":[ "273", "274" ]
      }
    },
    "matchedRels":[ "257", "111" ]
  }, {
    "id":"1951-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "277":{
        "label":"subset#277-set#47-\nBINDABLE",
        "explanation":"{subset=rel#277:RelSubset#47.BINDABLE, condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-47",
        "kind":"subset",
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "276" ]
      },
      "276":{
        "label":"#276-BindableFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($16, $1), =($8, $17), =($4, $2), =($6, $3))}",
        "set":"set-47",
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "108" ]
      }
    },
    "matchedRels":[ "259" ]
  }, {
    "id":"1966-FilterIntoJoinRule",
    "updates":{
      "262":{
        "inputs":[ "259", "281" ]
      },
      "set-51":{
        "label":"set-51",
        "kind":"set"
      },
      "280":{
        "label":"subset#280-set#51-\nNONE",
        "explanation":"{subset=rel#280:RelSubset#51.NONE}",
        "set":"set-51",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "278" ]
      },
      "278":{
        "label":"#278-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($4, $2), =($6, $3))}",
        "set":"set-51",
        "cost":"{inf}",
        "inputs":[ "59" ]
      },
      "281":{
        "label":"#281-LogicalJoin",
        "explanation":"{condition=AND(=($16, $1), =($8, $17)), joinType=inner}",
        "set":"set-47",
        "cost":"{inf}",
        "inputs":[ "280", "60" ]
      }
    },
    "matchedRels":[ "259", "61" ]
  }, {
    "id":"1972-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "283":{
        "label":"subset#283-set#48-\nBINDABLE",
        "explanation":"{subset=rel#283:RelSubset#48.BINDABLE, condition==($1, 'rating')}",
        "set":"set-48",
        "kind":"subset",
        "cost":"\nrowCount: 1E0\nrows: 1.14E2\ncpu:  2.27E2\nio:   0E0",
        "inputs":[ "282" ]
      },
      "282":{
        "label":"#282-BindableFilter",
        "explanation":"{condition==($1, 'rating')}",
        "set":"set-48",
        "cost":"\nrowCount: 1E0\nrows: 1.14E2\ncpu:  2.27E2\nio:   0E0",
        "inputs":[ "110" ]
      }
    },
    "matchedRels":[ "260" ]
  }, {
    "id":"1992-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "220":{
        "cost":"\nrowCount: 4.670233016522456E15\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0"
      },
      "239":{
        "cost":"\nrowCount: 4.670233016522456E15\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0"
      },
      "248":{
        "cost":"\nrowCount: 4.670233016522456E15\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0"
      },
      "258":{
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "257", "275", "284" ]
      },
      "267":{
        "cost":"\nrowCount: 4.670233016522456E15\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0"
      },
      "284":{
        "label":"#284-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-43",
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 9.223372036854775807E18\ncpu:  9.223372036854775807E18\nio:   0E0",
        "inputs":[ "277", "283" ]
      }
    },
    "matchedRels":[ "264" ]
  }, {
    "id":"2150-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "262":{
        "inputs":[ "259", "281", "270" ]
      },
      "270":{
        "set":"set-47"
      },
      "275":{
        "inputs":[ "262", "274" ]
      }
    },
    "matchedRels":[ "270" ]
  }, {
    "id":"2170-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "263":{
        "inputs":[ "260", "271" ]
      },
      "271":{
        "set":"set-48"
      },
      "275":{
        "inputs":[ "262", "263" ]
      }
    },
    "matchedRels":[ "271" ]
  }, {
    "id":"2211-FilterIntoJoinRule",
    "updates":{
      "277":{
        "inputs":[ "276", "290" ]
      },
      "set-52":{
        "label":"set-52",
        "kind":"set"
      },
      "289":{
        "label":"subset#289-set#52-\nNONE",
        "explanation":"{subset=rel#289:RelSubset#52.NONE}",
        "set":"set-52",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "287" ]
      },
      "287":{
        "label":"#287-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($4, $2), =($6, $3))}",
        "set":"set-52",
        "cost":"{inf}",
        "inputs":[ "104" ]
      },
      "290":{
        "label":"#290-BindableJoin",
        "explanation":"{condition=AND(=($16, $1), =($8, $17)), joinType=inner}",
        "set":"set-47",
        "cost":"{inf}",
        "inputs":[ "289", "106" ]
      }
    },
    "matchedRels":[ "276", "107" ]
  }, {
    "id":"2215-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "292":{
        "label":"subset#292-set#51-\nBINDABLE",
        "explanation":"{subset=rel#292:RelSubset#51.BINDABLE, condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($4, $2), =($6, $3))}",
        "set":"set-51",
        "kind":"subset",
        "cost":"\nrowCount: 1.43172844E9\nrows: 6.788891052057E12\ncpu:  6.787456621901E12\nio:   0E0",
        "inputs":[ "291" ]
      },
      "291":{
        "label":"#291-BindableFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($4, $2), =($6, $3))}",
        "set":"set-51",
        "cost":"\nrowCount: 1.43172844E9\nrows: 6.788891052057E12\ncpu:  6.787456621901E12\nio:   0E0",
        "inputs":[ "104" ]
      }
    },
    "matchedRels":[ "278" ]
  }, {
    "id":"2230-FilterIntoJoinRule",
    "updates":{
      "280":{
        "inputs":[ "278", "298" ]
      },
      "set-53":{
        "label":"set-53",
        "kind":"set"
      },
      "296":{
        "label":"subset#296-set#53-\nNONE",
        "explanation":"{subset=rel#296:RelSubset#53.NONE}",
        "set":"set-53",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "293" ]
      },
      "293":{
        "label":"#293-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), =($4, $2), =($6, $3))}",
        "set":"set-53",
        "cost":"{inf}",
        "inputs":[ "56" ]
      },
      "set-54":{
        "label":"set-54",
        "kind":"set"
      },
      "297":{
        "label":"subset#297-set#54-\nNONE",
        "explanation":"{subset=rel#297:RelSubset#54.NONE}",
        "set":"set-54",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "294" ]
      },
      "294":{
        "label":"#294-LogicalFilter",
        "explanation":"{condition=OR(LIKE($2, '%man%'), LIKE($2, '%Man%'))}",
        "set":"set-54",
        "cost":"{inf}",
        "inputs":[ "57" ]
      },
      "298":{
        "label":"#298-LogicalJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-51",
        "cost":"{inf}",
        "inputs":[ "296", "297" ]
      }
    },
    "matchedRels":[ "278", "58" ]
  }, {
    "id":"2236-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "137":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  6.787509642948E12\nio:   0E0"
      },
      "170":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  6.787504586323E12\nio:   0E0"
      },
      "177":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  6.787509642948E12\nio:   0E0"
      },
      "192":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  6.787500418831E12\nio:   0E0"
      },
      "197":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  6.787504586323E12\nio:   0E0"
      },
      "204":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  6.7874958949E12\nio:   0E0"
      },
      "211":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  6.787500418831E12\nio:   0E0"
      },
      "220":{
        "cost":"\nrowCount: 4.670233016522456E15\nrows: 1.168239757514302E16\ncpu:  6.787493134829E12\nio:   0E0"
      },
      "229":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  6.7874958949E12\nio:   0E0"
      },
      "239":{
        "cost":"\nrowCount: 4.670233016522456E15\nrows: 7.012164558620557E15\ncpu:  6.787493134814E12\nio:   0E0"
      },
      "248":{
        "cost":"\nrowCount: 4.670233016522456E15\nrows: 1.168239757514302E16\ncpu:  6.787493134829E12\nio:   0E0"
      },
      "258":{
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 2.341931541963927E15\ncpu:  6.787492866473E12\nio:   0E0"
      },
      "267":{
        "cost":"\nrowCount: 4.670233016522456E15\nrows: 7.012164558620557E15\ncpu:  6.787493134814E12\nio:   0E0"
      },
      "277":{
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 1.174360234630107E15\ncpu:  6.787492866246E12\nio:   0E0",
        "inputs":[ "276", "290", "299" ]
      },
      "284":{
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 2.341931541963927E15\ncpu:  6.787492866473E12\nio:   0E0"
      },
      "299":{
        "label":"#299-BindableJoin",
        "explanation":"{condition=AND(=($16, $1), =($8, $17)), joinType=inner}",
        "set":"set-47",
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 1.174360234630107E15\ncpu:  6.787492866246E12\nio:   0E0",
        "inputs":[ "292", "106" ]
      }
    },
    "matchedRels":[ "281" ]
  }, {
    "id":"2394-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "280":{
        "inputs":[ "278", "298", "287" ]
      },
      "287":{
        "set":"set-51"
      },
      "290":{
        "inputs":[ "280", "106" ]
      }
    },
    "matchedRels":[ "287" ]
  }, {
    "id":"2435-FilterIntoJoinRule",
    "updates":{
      "292":{
        "inputs":[ "291", "306" ]
      },
      "set-55":{
        "label":"set-55",
        "kind":"set"
      },
      "304":{
        "label":"subset#304-set#55-\nNONE",
        "explanation":"{subset=rel#304:RelSubset#55.NONE}",
        "set":"set-55",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "301" ]
      },
      "301":{
        "label":"#301-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), =($4, $2), =($6, $3))}",
        "set":"set-55",
        "cost":"{inf}",
        "inputs":[ "100" ]
      },
      "set-56":{
        "label":"set-56",
        "kind":"set"
      },
      "305":{
        "label":"subset#305-set#56-\nNONE",
        "explanation":"{subset=rel#305:RelSubset#56.NONE}",
        "set":"set-56",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "302" ]
      },
      "302":{
        "label":"#302-LogicalFilter",
        "explanation":"{condition=OR(LIKE($2, '%man%'), LIKE($2, '%Man%'))}",
        "set":"set-56",
        "cost":"{inf}",
        "inputs":[ "102" ]
      },
      "306":{
        "label":"#306-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-51",
        "cost":"{inf}",
        "inputs":[ "304", "305" ]
      }
    },
    "matchedRels":[ "291", "103" ]
  }, {
    "id":"2439-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "308":{
        "label":"subset#308-set#53-\nBINDABLE",
        "explanation":"{subset=rel#308:RelSubset#53.BINDABLE, condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), =($4, $2), =($6, $3))}",
        "set":"set-53",
        "kind":"subset",
        "cost":"\nrowCount: 1.824E3\nrows: 2.838638E6\ncpu:  2.296473E6\nio:   0E0",
        "inputs":[ "307" ]
      },
      "307":{
        "label":"#307-BindableFilter",
        "explanation":"{condition=AND(=($5, 'cast'), LIKE($7, '%complete%'), =($4, $2), =($6, $3))}",
        "set":"set-53",
        "cost":"\nrowCount: 1.824E3\nrows: 2.838638E6\ncpu:  2.296473E6\nio:   0E0",
        "inputs":[ "100" ]
      }
    },
    "matchedRels":[ "293" ]
  }, {
    "id":"2454-FilterIntoJoinRule",
    "updates":{
      "296":{
        "inputs":[ "293", "314" ]
      },
      "set-57":{
        "label":"set-57",
        "kind":"set"
      },
      "312":{
        "label":"subset#312-set#57-\nNONE",
        "explanation":"{subset=rel#312:RelSubset#57.NONE}",
        "set":"set-57",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "309" ]
      },
      "309":{
        "label":"#309-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), =($4, $2))}",
        "set":"set-57",
        "cost":"{inf}",
        "inputs":[ "54" ]
      },
      "set-58":{
        "label":"set-58",
        "kind":"set"
      },
      "313":{
        "label":"subset#313-set#58-\nNONE",
        "explanation":"{subset=rel#313:RelSubset#58.NONE}",
        "set":"set-58",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "310" ]
      },
      "310":{
        "label":"#310-LogicalFilter",
        "explanation":"{condition=LIKE($1, '%complete%')}",
        "set":"set-58",
        "cost":"{inf}",
        "inputs":[ "52" ]
      },
      "314":{
        "label":"#314-LogicalJoin",
        "explanation":"{condition==($6, $3), joinType=inner}",
        "set":"set-53",
        "cost":"{inf}",
        "inputs":[ "312", "313" ]
      }
    },
    "matchedRels":[ "293", "55" ]
  }, {
    "id":"2460-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "316":{
        "label":"subset#316-set#54-\nBINDABLE",
        "explanation":"{subset=rel#316:RelSubset#54.BINDABLE, condition=OR(LIKE($2, '%man%'), LIKE($2, '%Man%'))}",
        "set":"set-54",
        "kind":"subset",
        "cost":"\nrowCount: 7.85085E5\nrows: 3.925424E6\ncpu:  6.280679E6\nio:   0E0",
        "inputs":[ "315" ]
      },
      "315":{
        "label":"#315-BindableFilter",
        "explanation":"{condition=OR(LIKE($2, '%man%'), LIKE($2, '%Man%'))}",
        "set":"set-54",
        "cost":"\nrowCount: 7.85085E5\nrows: 3.925424E6\ncpu:  6.280679E6\nio:   0E0",
        "inputs":[ "102" ]
      }
    },
    "matchedRels":[ "294" ]
  }, {
    "id":"2480-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "192":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  5.2374082E7\nio:   0E0"
      },
      "197":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  5.6541574E7\nio:   0E0"
      },
      "204":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  4.7850151E7\nio:   0E0"
      },
      "211":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  5.2374082E7\nio:   0E0"
      },
      "220":{
        "cost":"\nrowCount: 4.670233016522457E15\nrows: 1.1675610122583468E16\ncpu:  4.509008E7\nio:   0E0"
      },
      "229":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  4.7850151E7\nio:   0E0"
      },
      "239":{
        "cost":"\nrowCount: 4.670233016522457E15\nrows: 7.005377106061003E15\ncpu:  4.5090065E7\nio:   0E0"
      },
      "248":{
        "cost":"\nrowCount: 4.670233016522457E15\nrows: 1.1675610122583468E16\ncpu:  4.509008E7\nio:   0E0"
      },
      "258":{
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 2.335144089404372E15\ncpu:  4.4821724E7\nio:   0E0"
      },
      "267":{
        "cost":"\nrowCount: 4.670233016522457E15\nrows: 7.005377106061003E15\ncpu:  4.5090065E7\nio:   0E0"
      },
      "277":{
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 1.167572782070552E15\ncpu:  4.4821497E7\nio:   0E0"
      },
      "284":{
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 2.335144089404372E15\ncpu:  4.4821724E7\nio:   0E0"
      },
      "292":{
        "cost":"\nrowCount: 1.43172844E9\nrows: 1.438492502E9\ncpu:  8.577152E6\nio:   0E0",
        "inputs":[ "291", "306", "317" ]
      },
      "299":{
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 1.167572782070552E15\ncpu:  4.4821497E7\nio:   0E0"
      },
      "317":{
        "label":"#317-BindableJoin",
        "explanation":"{condition=true, joinType=inner}",
        "set":"set-51",
        "cost":"\nrowCount: 1.43172844E9\nrows: 1.438492502E9\ncpu:  8.577152E6\nio:   0E0",
        "inputs":[ "308", "316" ]
      }
    },
    "matchedRels":[ "298" ]
  }, {
    "id":"2568-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "296":{
        "inputs":[ "293", "314", "301" ]
      },
      "301":{
        "set":"set-53"
      },
      "306":{
        "inputs":[ "296", "305" ]
      }
    },
    "matchedRels":[ "301" ]
  }, {
    "id":"2588-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "297":{
        "inputs":[ "294", "302" ]
      },
      "302":{
        "set":"set-54"
      },
      "306":{
        "inputs":[ "296", "297" ]
      }
    },
    "matchedRels":[ "302" ]
  }, {
    "id":"2629-FilterIntoJoinRule",
    "updates":{
      "308":{
        "inputs":[ "307", "325" ]
      },
      "set-59":{
        "label":"set-59",
        "kind":"set"
      },
      "323":{
        "label":"subset#323-set#59-\nNONE",
        "explanation":"{subset=rel#323:RelSubset#59.NONE}",
        "set":"set-59",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "320" ]
      },
      "320":{
        "label":"#320-LogicalFilter",
        "explanation":"{condition=AND(=($5, 'cast'), =($4, $2))}",
        "set":"set-59",
        "cost":"{inf}",
        "inputs":[ "98" ]
      },
      "set-60":{
        "label":"set-60",
        "kind":"set"
      },
      "324":{
        "label":"subset#324-set#60-\nNONE",
        "explanation":"{subset=rel#324:RelSubset#60.NONE}",
        "set":"set-60",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "321" ]
      },
      "321":{
        "label":"#321-LogicalFilter",
        "explanation":"{condition=LIKE($1, '%complete%')}",
        "set":"set-60",
        "cost":"{inf}",
        "inputs":[ "96" ]
      },
      "325":{
        "label":"#325-BindableJoin",
        "explanation":"{condition==($6, $3), joinType=inner}",
        "set":"set-53",
        "cost":"{inf}",
        "inputs":[ "323", "324" ]
      }
    },
    "matchedRels":[ "307", "99" ]
  }, {
    "id":"2633-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "327":{
        "label":"subset#327-set#57-\nBINDABLE",
        "explanation":"{subset=rel#327:RelSubset#57.BINDABLE, condition=AND(=($5, 'cast'), =($4, $2))}",
        "set":"set-57",
        "kind":"subset",
        "cost":"\nrowCount: 1.2158E4\nrows: 6.87592E5\ncpu:  6.75436E5\nio:   0E0",
        "inputs":[ "326" ]
      },
      "326":{
        "label":"#326-BindableFilter",
        "explanation":"{condition=AND(=($5, 'cast'), =($4, $2))}",
        "set":"set-57",
        "cost":"\nrowCount: 1.2158E4\nrows: 6.87592E5\ncpu:  6.75436E5\nio:   0E0",
        "inputs":[ "98" ]
      }
    },
    "matchedRels":[ "309" ]
  }, {
    "id":"2648-FilterIntoJoinRule",
    "updates":{
      "312":{
        "inputs":[ "309", "331" ]
      },
      "set-61":{
        "label":"set-61",
        "kind":"set"
      },
      "330":{
        "label":"subset#330-set#61-\nNONE",
        "explanation":"{subset=rel#330:RelSubset#61.NONE}",
        "set":"set-61",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "328" ]
      },
      "328":{
        "label":"#328-LogicalFilter",
        "explanation":"{condition==($1, 'cast')}",
        "set":"set-61",
        "cost":"{inf}",
        "inputs":[ "52" ]
      },
      "331":{
        "label":"#331-LogicalJoin",
        "explanation":"{condition==($4, $2), joinType=inner}",
        "set":"set-57",
        "cost":"{inf}",
        "inputs":[ "51", "330" ]
      }
    },
    "matchedRels":[ "309", "53" ]
  }, {
    "id":"2654-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "333":{
        "label":"subset#333-set#58-\nBINDABLE",
        "explanation":"{subset=rel#333:RelSubset#58.BINDABLE, condition=LIKE($1, '%complete%')}",
        "set":"set-58",
        "kind":"subset",
        "cost":"\nrowCount: 1E0\nrows: 5E0\ncpu:  9E0\nio:   0E0",
        "inputs":[ "332" ]
      },
      "332":{
        "label":"#332-BindableFilter",
        "explanation":"{condition=LIKE($1, '%complete%')}",
        "set":"set-58",
        "cost":"\nrowCount: 1E0\nrows: 5E0\ncpu:  9E0\nio:   0E0",
        "inputs":[ "96" ]
      }
    },
    "matchedRels":[ "310" ]
  }, {
    "id":"2674-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "204":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  4.6229123E7\nio:   0E0"
      },
      "211":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  5.0753054E7\nio:   0E0"
      },
      "220":{
        "cost":"\nrowCount: 4.670233016522456E15\nrows: 1.1675610120434248E16\ncpu:  4.3469052E7\nio:   0E0"
      },
      "229":{
        "cost":"\nrowCount: 9.223372036854775807E18\nrows: 9.223372036854775807E18\ncpu:  4.6229123E7\nio:   0E0"
      },
      "239":{
        "cost":"\nrowCount: 4.670233016522456E15\nrows: 7.005377103911784E15\ncpu:  4.3469037E7\nio:   0E0"
      },
      "248":{
        "cost":"\nrowCount: 4.670233016522456E15\nrows: 1.1675610120434248E16\ncpu:  4.3469052E7\nio:   0E0"
      },
      "258":{
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 2.335144087255155E15\ncpu:  4.3200696E7\nio:   0E0"
      },
      "267":{
        "cost":"\nrowCount: 4.670233016522456E15\nrows: 7.005377103911784E15\ncpu:  4.3469037E7\nio:   0E0"
      },
      "277":{
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 1.167572779921335E15\ncpu:  4.3200469E7\nio:   0E0"
      },
      "284":{
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 2.335144087255155E15\ncpu:  4.3200696E7\nio:   0E0"
      },
      "292":{
        "cost":"\nrowCount: 1.43172844E9\nrows: 1.436343284E9\ncpu:  6.956124E6\nio:   0E0"
      },
      "299":{
        "cost":"\nrowCount: 1.167571307333706E15\nrows: 1.167572779921335E15\ncpu:  4.3200469E7\nio:   0E0"
      },
      "308":{
        "cost":"\nrowCount: 1.824E3\nrows: 6.8942E5\ncpu:  6.75445E5\nio:   0E0",
        "inputs":[ "307", "325", "334" ]
      },
      "317":{
        "cost":"\nrowCount: 1.43172844E9\nrows: 1.436343284E9\ncpu:  6.956124E6\nio:   0E0"
      },
      "334":{
        "label":"#334-BindableJoin",
        "explanation":"{condition==($6, $3), joinType=inner}",
        "set":"set-53",
        "cost":"\nrowCount: 1.824E3\nrows: 6.8942E5\ncpu:  6.75445E5\nio:   0E0",
        "inputs":[ "327", "333" ]
      }
    },
    "matchedRels":[ "314" ]
  }, {
    "id":"2832-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "312":{
        "inputs":[ "309", "331", "320" ]
      },
      "320":{
        "set":"set-57"
      },
      "325":{
        "inputs":[ "312", "324" ]
      }
    },
    "matchedRels":[ "320" ]
  }, {
    "id":"2852-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "313":{
        "inputs":[ "310", "321" ]
      },
      "321":{
        "set":"set-58"
      },
      "325":{
        "inputs":[ "312", "313" ]
      }
    },
    "matchedRels":[ "321" ]
  }, {
    "id":"2893-FilterIntoJoinRule",
    "updates":{
      "327":{
        "inputs":[ "326", "340" ]
      },
      "set-62":{
        "label":"set-62",
        "kind":"set"
      },
      "339":{
        "label":"subset#339-set#62-\nNONE",
        "explanation":"{subset=rel#339:RelSubset#62.NONE}",
        "set":"set-62",
        "kind":"subset",
        "cost":"{inf}",
        "inputs":[ "337" ]
      },
      "337":{
        "label":"#337-LogicalFilter",
        "explanation":"{condition==($1, 'cast')}",
        "set":"set-62",
        "cost":"{inf}",
        "inputs":[ "96" ]
      },
      "340":{
        "label":"#340-BindableJoin",
        "explanation":"{condition==($4, $2), joinType=inner}",
        "set":"set-57",
        "cost":"{inf}",
        "inputs":[ "94", "339" ]
      }
    },
    "matchedRels":[ "326", "97" ]
  }, {
    "id":"2897-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "342":{
        "label":"subset#342-set#61-\nBINDABLE",
        "explanation":"{subset=rel#342:RelSubset#61.BINDABLE, condition==($1, 'cast')}",
        "set":"set-61",
        "kind":"subset",
        "cost":"\nrowCount: 1E0\nrows: 5E0\ncpu:  9E0\nio:   0E0",
        "inputs":[ "341" ]
      },
      "341":{
        "label":"#341-BindableFilter",
        "explanation":"{condition==($1, 'cast')}",
        "set":"set-61",
        "cost":"\nrowCount: 1E0\nrows: 5E0\ncpu:  9E0\nio:   0E0",
        "inputs":[ "96" ]
      }
    },
    "matchedRels":[ "328" ]
  }, {
    "id":"2917-BindableJoinRule(in:NONE,out:BINDABLE)",
    "updates":{
      "308":{
        "cost":"\nrowCount: 3.039E3\nrows: 1.58398E5\ncpu:  1.35105E5\nio:   0E0"
      },
      "317":{
        "cost":"\nrowCount: 2.386214067E9\nrows: 2.390297889E9\ncpu:  6.415784E6\nio:   0E0"
      },
      "327":{
        "cost":"\nrowCount: 2.0263E4\nrows: 1.55354E5\ncpu:  1.35096E5\nio:   0E0",
        "inputs":[ "326", "340", "343" ]
      },
      "334":{
        "cost":"\nrowCount: 3.039E3\nrows: 1.58398E5\ncpu:  1.35105E5\nio:   0E0"
      },
      "343":{
        "label":"#343-BindableJoin",
        "explanation":"{condition==($4, $2), joinType=inner}",
        "set":"set-57",
        "cost":"\nrowCount: 2.0263E4\nrows: 1.55354E5\ncpu:  1.35096E5\nio:   0E0",
        "inputs":[ "94", "342" ]
      }
    },
    "matchedRels":[ "331" ]
  }, {
    "id":"3075-BindableFilterRule(in:NONE,out:BINDABLE)",
    "updates":{
      "330":{
        "inputs":[ "328", "337" ]
      },
      "337":{
        "set":"set-61"
      },
      "340":{
        "inputs":[ "94", "330" ]
      }
    },
    "matchedRels":[ "337" ]
  }, {
    "id":"FINAL",
    "updates":{
      "90":{
        "inFinalPlan":true
      },
      "94":{
        "inFinalPlan":true
      },
      "93":{
        "inFinalPlan":true
      },
      "96":{
        "inFinalPlan":true
      },
      "95":{
        "inFinalPlan":true
      },
      "102":{
        "inFinalPlan":true
      },
      "101":{
        "inFinalPlan":true
      },
      "106":{
        "inFinalPlan":true
      },
      "105":{
        "inFinalPlan":true
      },
      "110":{
        "inFinalPlan":true
      },
      "109":{
        "inFinalPlan":true
      },
      "114":{
        "inFinalPlan":true
      },
      "113":{
        "inFinalPlan":true
      },
      "118":{
        "inFinalPlan":true
      },
      "117":{
        "inFinalPlan":true
      },
      "122":{
        "inFinalPlan":true
      },
      "121":{
        "inFinalPlan":true
      },
      "126":{
        "inFinalPlan":true
      },
      "125":{
        "inFinalPlan":true
      },
      "130":{
        "inFinalPlan":true
      },
      "129":{
        "inFinalPlan":true
      },
      "134":{
        "inFinalPlan":true
      },
      "133":{
        "inFinalPlan":true
      },
      "137":{
        "inFinalPlan":true
      },
      "139":{
        "inFinalPlan":true
      },
      "138":{
        "inFinalPlan":true
      },
      "140":{
        "inFinalPlan":true
      },
      "170":{
        "inFinalPlan":true
      },
      "176":{
        "inFinalPlan":true
      },
      "175":{
        "inFinalPlan":true
      },
      "177":{
        "inFinalPlan":true
      },
      "192":{
        "inFinalPlan":true
      },
      "197":{
        "inFinalPlan":true
      },
      "204":{
        "inFinalPlan":true
      },
      "211":{
        "inFinalPlan":true
      },
      "220":{
        "inFinalPlan":true
      },
      "228":{
        "inFinalPlan":true
      },
      "227":{
        "inFinalPlan":true
      },
      "229":{
        "inFinalPlan":true
      },
      "239":{
        "inFinalPlan":true
      },
      "247":{
        "inFinalPlan":true
      },
      "246":{
        "inFinalPlan":true
      },
      "248":{
        "inFinalPlan":true
      },
      "258":{
        "inFinalPlan":true
      },
      "266":{
        "inFinalPlan":true
      },
      "265":{
        "inFinalPlan":true
      },
      "267":{
        "inFinalPlan":true
      },
      "277":{
        "inFinalPlan":true
      },
      "283":{
        "inFinalPlan":true
      },
      "282":{
        "inFinalPlan":true
      },
      "284":{
        "inFinalPlan":true
      },
      "292":{
        "inFinalPlan":true
      },
      "299":{
        "inFinalPlan":true
      },
      "308":{
        "inFinalPlan":true
      },
      "316":{
        "inFinalPlan":true
      },
      "315":{
        "inFinalPlan":true
      },
      "317":{
        "inFinalPlan":true
      },
      "327":{
        "inFinalPlan":true
      },
      "333":{
        "inFinalPlan":true
      },
      "332":{
        "inFinalPlan":true
      },
      "334":{
        "inFinalPlan":true
      },
      "342":{
        "inFinalPlan":true
      },
      "341":{
        "inFinalPlan":true
      },
      "343":{
        "inFinalPlan":true
      }
    },
    "matchedRels":[ ]
  } ]
};
