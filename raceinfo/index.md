---
layout: subpage
title: "Aquathlon 2025: Race Information"
---

# Aquathlon 2025: Race Information

**{{ site.data.raceinfo.venue }}**

<div class="alert">
<strong>IMPORTANT:</strong> Please read this briefing before the race.
</div>

## Timings

<table>
<thead>
<tr>
<th style="width: 25%">Time</th>
<th>Activity</th>
</tr>
</thead>
<tbody>
{% for item in site.data.raceinfo.timings %}
<tr>
<td><strong>{{ item.time }}</strong></td>
<td>{{ item.activity }}</td>
</tr>
{% endfor %}
</tbody>
</table>

<div class="alert">
<strong>Please don't arrive before 18:15.</strong> We do not have access to the lido until after 18:15; the lido car park will be packed with customers trying to leave.
</div>

<img src="{{ '/assets/images/lido_map.png' | relative_url }}" alt="Lido Map" class="info-image" />

## Medical Declaration

**Please complete the health declaration online before you visit the registration tent** and have the confirmation email available to show the Registration team if required. You will not receive a race number without a completed health declaration.

[Complete Medical Declaration →]({{ '/medical-declaration/' | relative_url }})

## Parking

It is strongly recommended you park at **Guildford Spectrum (free)** and walk over to the Lido rear car overflow car park where Registration is.

Parking is also available in the main lido public car park and at the Bowling Green Car Park further up Lido Road. We advise sharing lifts if possible.

## Registration

Registration will take place in the event village, which is in the overflow car park beside the lido.

**If you are a member of British Triathlon please bring your membership card to registration** and show it to the marshals.

You will receive a coloured race number and wrist band. The colour of both indicates the race category. Please put the wrist band on straight away **ON YOUR RIGHT WRIST**, and attach the race number to the front of the shirt you will run in or a Race belt if using a TriSuit.

## Photography

Parents / guardians / competitors who do not wish photos to be published of themselves or their children must let our registration team know when they collect their race number. The marshals will give you a pink 'No Photos' wristband which must also be secured on your RIGHT WRIST.

**Photographs are taken on the last bend before the finish. SMILE!**

## Race Timing

When you register, you will be given a paper race number. Attach this to the front of the shirt you will run in using safety pins provided or you can also use a race belt if you prefer. **Marshals will help write your race number in large numbers on both upper arms using a marker.**

## Transition

**Your upper body must be covered before you leave transition. Trisuits are acceptable. Don't forget to have your race number clearly on display, or you won't get a race time!**

Please minimise the amount of kit you take into transition because space is limited. You shouldn't need much more than a towel, running shoes, socks, shirt, shorts and a bottle of water.

## Race Routes

<table>
<thead>
<tr>
<th>Category</th>
<th>Swim Distance</th>
<th>Lengths</th>
<th>Run Distance</th>
</tr>
</thead>
<tbody>
{% for route in site.data.raceinfo.routes %}
<tr>
<td><strong>{{ route.category }}</strong></td>
<td>{{ route.swim }}</td>
<td>{{ route.lengths }}</td>
<td>{{ route.run }}</td>
</tr>
{% endfor %}
</tbody>
</table>

### The Swim

Children aged 8 to 14 in the Tristar categories race on the Tristar course. Children aged 15 to 19 in the Youth & Junior category will race on the Adult course and will start with the adults at 19:30.

<img src="{{ '/assets/images/children_swim.png' | relative_url }}" alt="Children's Swim Route" class="info-image" />

- Tristar swims occur in increasing order of distance (Tristar Start first, Tristar 3 last)
- Competitors in each category will be started slowest first, with a suitable gap between competitors
- Overtaking is permitted. Proceed with caution. Tap the foot of a competitor in front approaching the wall who will let you pass
- Tumble turns are permitted but proceed with caution. This race is not the time for a first attempt

<img src="{{ '/assets/images/adult_swim.png' | relative_url }}" alt="Adult Swim Route" class="info-image" />

### The Run - 'Out and Back'

<img src="{{ '/assets/images/run_route.png' | relative_url }}" alt="Run Route" class="info-image" />

The run routes are signposted with large, black arrows on a yellow background. Marshals are spaced regularly along the route.

## Medical Information

**Please ensure you have filled in the medical declaration before you collect your race number.**

Our event medical team from Team Medic will be on standby for any first aid or medical treatment.

<div class="alert">
<strong>Do not compete if you feel unwell or have recently been unwell.</strong> Many medical emergencies occur because people have been unwell but do not want to miss the event.
</div>

## Race Rules

The Phoenix Aquathlon races are governed by British Triathlon and thus British Triathlon rules apply. The most up-to-date rules can be found at:

[https://www.britishtriathlon.org/competitionrules](https://www.britishtriathlon.org/competitionrules)

- Enjoy the race in an atmosphere of sportsmanship, equality and fair play
- It is the competitor's responsibility to know and correctly complete the full course of the event
- No individual support/pacing by cycles or on foot is permitted
- All competitors must ensure they are adequately clothed at all times
- No headphones, MP3 players, or equipment that acts as an impediment to hearing

## After The Race

We aim to hold a prize giving for each category soon after every competitor within that category has finished. If you think you might be in with a chance of winning a prize, please make sure you stick around!

Results: [{{ site.url }}/raceresults/]({{ '/raceresults/' | relative_url }})

Contact: [aquathlon@phoenixtri.co.uk](mailto:aquathlon@phoenixtri.co.uk)

## Our Sponsors

The race series wouldn't be possible without the generosity and support of our fantastic sponsors.

<div class="sponsors">
{% for sponsor in site.data.sponsors.sponsors %}
<img src="{{ '/assets/images/' | append: sponsor.logo | relative_url }}" alt="{{ sponsor.name }}" />
{% endfor %}
</div>
