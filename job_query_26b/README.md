# Calcite operator tree for JOB query 26b

Original sql query:

```sql
SELECT
    MIN(chn.name) AS character_name,
    MIN(mi_idx.info) AS rating,
    MIN(t.title) AS complete_hero_movie
FROM
    complete_cast AS cc,
    comp_cast_type AS cct1,
    comp_cast_type AS cct2,
    char_name AS chn,
    cast_info AS ci,
    info_type AS it2,
    keyword AS k,
    kind_type AS kt,
    movie_info_idx AS mi_idx,
    movie_keyword AS mk,
    name AS n,
    title AS t
WHERE
    cct1.kind = 'cast'
    AND cct2.kind like '%complete%'
    AND chn.name is not NULL
    and (
        chn.name like '%man%'
        or chn.name like '%Man%'
    )
    AND it2.info = 'rating'
    AND k.keyword in (
        'superhero',
        'marvel-comics',
        'based-on-comic',
        'fight'
    )
    AND kt.kind = 'movie'
    AND mi_idx.info > '8.0'
    AND t.production_year > 2005
    AND kt.id = t.kind_id
    AND t.id = mk.movie_id
    AND t.id = ci.movie_id
    AND t.id = cc.movie_id
    AND t.id = mi_idx.movie_id
    AND mk.movie_id = ci.movie_id
    AND mk.movie_id = cc.movie_id
    AND mk.movie_id = mi_idx.movie_id
    AND ci.movie_id = cc.movie_id
    AND ci.movie_id = mi_idx.movie_id
    AND cc.movie_id = mi_idx.movie_id
    AND chn.id = ci.person_role_id
    AND n.id = ci.person_id
    AND k.id = mk.keyword_id
    AND cct1.id = cc.subject_id
    AND cct2.id = cc.status_id
    AND it2.id = mi_idx.info_type_id;
```

"Optimized" sql query:

```sql
SELECT MIN("t1"."name") AS "CHARACTER_NAME", MIN("t5"."info") AS "RATING", MIN("t6"."title") AS "COMPLETE_HERO_MOVIE" FROM "complete_cast" INNER JOIN (SELECT * FROM "comp_cast_type" WHERE "kind" = 'cast') AS "t" ON "complete_cast"."subject_id" = "t"."id" INNER JOIN (SELECT * FROM "comp_cast_type" WHERE "kind" LIKE '%complete%') AS "t0" ON "complete_cast"."status_id" = "t0"."id" CROSS JOIN (SELECT * FROM "char_name" WHERE "name" LIKE '%man%' OR "name" LIKE '%Man%') AS "t1" INNER JOIN "cast_info" ON "complete_cast"."movie_id" = "cast_info"."movie_id" AND "t1"."id" = "cast_info"."person_role_id" CROSS JOIN (SELECT * FROM "info_type" WHERE "info" = 'rating') AS "t2" CROSS JOIN (SELECT * FROM "keyword" WHERE "keyword" IN ('based-on-comic', 'fight', 'marvel-comics', 'superhero')) AS "t3" CROSS JOIN (SELECT * FROM "kind_type" WHERE "kind" = 'movie') AS "t4" INNER JOIN (SELECT * FROM "movie_info_idx" WHERE "info" > '8.0') AS "t5" ON "cast_info"."movie_id" = "t5"."movie_id" AND "t2"."id" = "t5"."info_type_id" INNER JOIN "movie_keyword" ON "cast_info"."movie_id" = "movie_keyword"."movie_id" AND "t3"."id" = "movie_keyword"."keyword_id" INNER JOIN "name" ON "cast_info"."person_id" = "name"."id" INNER JOIN (SELECT * FROM "title" WHERE "production_year" > 2005) AS "t6" ON "t4"."id" = "t6"."kind_id" AND "movie_keyword"."movie_id" = "t6"."id"
```

## Logical plan

```
LogicalAggregate(group=[{}], CHARACTER_NAME=[MIN($0)], RATING=[MIN($1)], COMPLETE_HERO_MOVIE=[MIN($2)])
  LogicalProject(name=[$10], info0=[$32], title=[$53])
    LogicalFilter(condition=[AND(=($5, 'cast'), LIKE($7, '%complete%'), IS NOT NULL($10), OR(LIKE($10, '%man%'), LIKE($10, '%Man%')), =($23, 'rating'), OR(=($25, 'superhero'), =($25, 'marvel-comics'), =($25, 'based-on-comic'), =($25, 'fight')), =($28, 'movie'), >($32, '8.0'), >($48, 2005), =($27, $47), =($46, $35), =($46, $16), =($46, $1), =($46, $30), =($35, $16), =($35, $1), =($35, $30), =($16, $1), =($16, $30), =($1, $30), =($8, $17), =($37, $15), =($24, $36), =($4, $2), =($6, $3), =($22, $31))])
      LogicalJoin(condition=[true], joinType=[inner])
        LogicalJoin(condition=[true], joinType=[inner])
          LogicalJoin(condition=[true], joinType=[inner])
            LogicalJoin(condition=[true], joinType=[inner])
              LogicalJoin(condition=[true], joinType=[inner])
                LogicalJoin(condition=[true], joinType=[inner])
                  LogicalJoin(condition=[true], joinType=[inner])
                    LogicalJoin(condition=[true], joinType=[inner])
                      LogicalJoin(condition=[true], joinType=[inner])
                        LogicalJoin(condition=[true], joinType=[inner])
                          LogicalJoin(condition=[true], joinType=[inner])
                            LogicalTableScan(table=[[complete_cast]])
                            LogicalTableScan(table=[[comp_cast_type]])
                          LogicalTableScan(table=[[comp_cast_type]])
                        LogicalTableScan(table=[[char_name]])
                      LogicalTableScan(table=[[cast_info]])
                    LogicalTableScan(table=[[info_type]])
                  LogicalTableScan(table=[[keyword]])
                LogicalTableScan(table=[[kind_type]])
              LogicalTableScan(table=[[movie_info_idx]])
            LogicalTableScan(table=[[movie_keyword]])
          LogicalTableScan(table=[[name]])
        LogicalTableScan(table=[[title]])
```

## Physical plan

```
BindableAggregate(group=[{}], CHARACTER_NAME=[MIN($0)], RATING=[MIN($1)], COMPLETE_HERO_MOVIE=[MIN($2)])
  BindableProject(name=[$10], info0=[$32], title=[$53])
    BindableJoin(condition=[AND(=($27, $47), =($35, $46))], joinType=[inner])
      BindableJoin(condition=[=($37, $15)], joinType=[inner])
        BindableJoin(condition=[AND(=($16, $35), =($24, $36))], joinType=[inner])
          BindableJoin(condition=[AND(=($16, $30), =($22, $31))], joinType=[inner])
            BindableJoin(condition=[true], joinType=[inner])
              BindableJoin(condition=[true], joinType=[inner])
                BindableJoin(condition=[true], joinType=[inner])
                  BindableJoin(condition=[AND(=($16, $1), =($8, $17))], joinType=[inner])
                    BindableJoin(condition=[true], joinType=[inner])
                      BindableJoin(condition=[=($6, $3)], joinType=[inner])
                        BindableJoin(condition=[=($4, $2)], joinType=[inner])
                          BindableTableScan(table=[[complete_cast]])
                          BindableFilter(condition=[=($1, 'cast')])
                            BindableTableScan(table=[[comp_cast_type]])
                        BindableFilter(condition=[LIKE($1, '%complete%')])
                          BindableTableScan(table=[[comp_cast_type]])
                      BindableFilter(condition=[OR(LIKE($2, '%man%'), LIKE($2, '%Man%'))])
                        BindableTableScan(table=[[char_name]])
                    BindableTableScan(table=[[cast_info]])
                  BindableFilter(condition=[=($1, 'rating')])
                    BindableTableScan(table=[[info_type]])
                BindableFilter(condition=[SEARCH($1, Sarg['based-on-comic', 'fight':CHAR(14), 'marvel-comics':CHAR(14), 'superhero':CHAR(14)]:CHAR(14))])
                  BindableTableScan(table=[[keyword]])
              BindableFilter(condition=[=($1, 'movie')])
                BindableTableScan(table=[[kind_type]])
            BindableFilter(condition=[>($3, '8.0')])
              BindableTableScan(table=[[movie_info_idx]])
          BindableTableScan(table=[[movie_keyword]])
        BindableTableScan(table=[[name]])
      BindableFilter(condition=[>($2, 2005)])
        BindableTableScan(table=[[title]])
```
